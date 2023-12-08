import React, {useState, useEffect, useRef} from 'react';
import {Button, Text, View, TextInput, StyleSheet, TouchableOpacity, Modal, Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
import { Camera, CameraType } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


export default function Calendar() {
  const camRef = useRef(null);
  const [type, setType] = useState (Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(null);


  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission (status === 'granted');
    })();
  }, []);

  if (hasPermission == null) {
    return <View/>
  }

  if (hasPermission === false) {
    return <Text> Acesso Negado! </Text>;
  }
  
  async function takePicture() {
    if(camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri)
      setOpen(true)
      console.log(data);
    } 
  }


  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Camera
      style={{flex: 1}}
      type={type}
      ref = {camRef}
      >
        <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            style={styles.return_button}
            underlayColor="lightblue"
            onPress={() => useNavigation().navigate('Menu')}
          >
            <AntDesign name="left" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 30,
            left: 30,
          }}
          
          onPress={ () => {
            setType(
              type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
            );
          }}>
            <Ionicons name="camera-reverse-outline" size={60} color="black"  style={{fontSiz: 20, marginBottom: 13, color: 'white'}}/>
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            JustifyContent: 'center',
            alignItems: 'center',
            bottom: -685,
          }}
          
          onPress={takePicture}>
            <View style={{width: 65, height: 65, backgroundColor: '#297447', borderRadius: '100%'}}
            ></View>
          </TouchableOpacity>
        </View>
      </Camera>
      {
        capturedPhoto && 
        <Modal 
        animationType="slide"
        transparent={false}
        visible= {open}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#1E1E1E'}}>
            <TouchableOpacity style={{margin:10, alignItems: 'center', justifyContent:'center', flexDirection: 'row'}} onPress={()=> setOpen(false)}>
              <Text style={{marginRight:5, fontSize: 24, fontFamily: 'Poppins-Regular', color: 'white'}}>Fechar</Text>
              <Ionicons name="md-close" size={40} color="red" />
            </TouchableOpacity>
            <Image
              style={{width: '100%', height: 500, borderRadius: 20}}
              source={{uri: capturedPhoto}}
            />
          </View>
        </Modal>
      }
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#297447',
  },

  return_icon_container: {
    width: '100%',
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

return_button: {
    position: 'absolute',
    top: 30,
    left: 30,
},

});
