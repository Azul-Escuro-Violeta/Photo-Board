import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
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
      <TouchableOpacity
      style={styles.calendar_button}
      underlayColor="lightblue"
      onPress={() => navigation.navigate('Calendar')}
      >
        <Text style={styles.calendar_text}>Acessar Calendário</Text>
        <AntDesign name="right" size={24} color="white" />
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

  calendar_text: {
    color: 'white',
    fontFamily:"Poppins-Medium",
    fontSize: 16,
  },

  calendar_button: {
    marginTop: 30,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
