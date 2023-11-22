import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
import Return from '../../components/ReturnButton/return_button.js'
import { useNavigation } from '@react-navigation/native';


export default function Calendar() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../fonts/Poppins-Medium.ttf')
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <>
    <Header/>
    <View style={styles.container}>
    <View style={styles.return_icon_container}>
        <TouchableOpacity
        style={styles.return_button}
        underlayColor="lightblue"
        onPress={() => navigation.navigate('Menu')}
       >
        <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1E1E1E',
  },

  return_icon_container: {
    width: '100%',
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

return_button: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

});
