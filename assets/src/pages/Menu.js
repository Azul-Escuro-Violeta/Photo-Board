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
      <View style={styles.calendar_container}>
        <View style={styles.day}>
          <Text style={styles.dayName}>D</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>S</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>T</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>Q</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>Q</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>S</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayName}>S</Text>
          <View style={styles.dayNumber_container}>
            <Text style={styles.dayNumber}>14</Text>
          </View>
        </View>
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

  calendar_text: {
    color: 'white',
    fontFamily:"Poppins-Medium",
    fontSize: 16,
  },

  calendar_container: {
    marginTop: 30,
    height: 80,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  calendar_button: {
    marginTop: 30,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  day: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },

  dayName: {
    color: '#297447',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },

  dayNumber_container: {
    backgroundColor: '#262626',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',    
  },

  dayNumber: {
    color: 'white',
    borderRadius: '100%',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});
