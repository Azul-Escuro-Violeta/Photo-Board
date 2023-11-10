import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
import { useNavigation } from '@react-navigation/native';
import ReturnButton from '../../components/ReturnButton/return_button.js'
export default function Calendar() {
  const navigation = useNavigation();
  return (
    <>
    <Header/>
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.return_button}
        underlayColor="lightblue"
        onPress={() => navigation.navigate('Menu')}
       >
        <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
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

    return_button: {
      marginTop: 30,
      marginLeft: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },

    text: {
      color: 'white',
    },
});
