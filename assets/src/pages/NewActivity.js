import React, {useState} from 'react';
import {CheckBox, ScrollView, Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
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
        <Text style={styles.pageTitle}>
            Nova atividade
        </Text>
        <View style={styles.formsContainer}>
            <ScrollView contentContainerStyle={styles.formSubcontainer}
                showsVerticalScrollIndicator={false}
            >

            
                <Text style={styles.input_text}>Título da Atividade</Text>
                <View style={styles.input_container}>
                    <TextInput
                            style={styles.input}
                            placeholder=""
                            placeholderTextColor="#878787"
                        />
                </View>
                
                <Text style={styles.input_text}>Prazo</Text>
                <View style={styles.input_container}>
                    <TextInput
                            style={styles.input}
                            placeholder="dd/mm/aa"
                            placeholderTextColor="#878787"
                        />
                </View>

                <Text style={styles.input_text}>Observações</Text>
                <View style={styles.input_container_text}>
                    <TextInput
                            style={styles.input_big}
                            placeholder=""
                            placeholderTextColor="#878787"
                        />
                </View>

                <Text style={styles.input_text}>Deseja ativar notificações</Text>
                <View style={styles.input_container}>
                                                                  
                </View>

                <TouchableOpacity
                  style={styles.button}
                  underlayColor="lightblue"
                  onPress={() => navigation.navigate('Menu')}
                >
                  <Text 
                  style={styles.submitText}>
                    Adionar Atividade</Text>
                </TouchableOpacity>
            </ScrollView>
            
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

pageTitle: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginBottom: 30,
    marginTop: 15,
},

formsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: '#297447',
    height: '100%',
    paddingTop: 30,
},

input_text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 15,
},

input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
},

input_big: {
    width: '90%',
    height: 80,
    fontSize: 16, 
},

input_container_text: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    height: 100,
    justifyContent: 'flex-start',
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
},

input: {
    width: '90%',
    height: 50,
    fontSize: 16,
},

formSubcontainer: {
    width: '100%',                                                         
},

button: {
    width: 300,
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  submitText: {
    color: 'white',
    fontFamily: 'Poppins-Bold'
  },

checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
},

checkbox: {
    alignSelf: 'center',
},
label: {
    margin: 8,
},
},
);
