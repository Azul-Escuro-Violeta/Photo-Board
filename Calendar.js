import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';
import Header from '../../components/Header/index.js'
import { useNavigation } from '@react-navigation/native';
import { Calendar, LocaleConfig} from 'react-native-calendars'

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Agos.', 'Set.', 'Out.', 'Nov.', 'Déc.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: "Hoje"
};

LocaleConfig.defaultLocale = 'fr';


export default function Calendario() {
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
 
    <Calendar 
    style={{
    backgroundColor: 'white', borderWidth: 10,
    borderRadius: 20,
    borderColor: '#297447',
    height: 380,
    width: 320,
    color: '#297447',
    fontFamily: 'Poppins-Regular'}}
    theme={{
      textMonthFontWeight: 'bold',
      arrowColor: '#297447',
      todayTextColor: 'white',
      todayDotColor: 'bold',
      todayBackgroundColor: '#303030',
      textDayHeaderFontWeight: 'bold',
      textDayHeaderFontSize: 16,
    }}
    onDayPress={day => {
   
    }}
    markedDates={{
      '2023-12-04': {selected: true, marked: true, selectedColor: '#C95555'},
      '2023-12-11': {selected: true, marked: true, selectedColor: '#9747FF'},
      '2023-12-15': {selected: true, marked: true, selectedColor: '#9747FF'},
      '2023-12-18': {selected: true, marked: true, selectedColor: '#17A1FA'},      
    }}
    enableSwipeMonths= {true}
    />
    <View style={{ width: '80%', marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white', marginBottom: 20}}>
        Datas importantes
      </Text>
      <View style={{width: '100%'}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center' , marginBottom: 10,}}>
            <View style={{width: 20, height: 20, backgroundColor: '#C95555', color: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'regular', color: 'white'}}></Text>
            </View>
            <Text style={{marginLeft: 10, fontWeight: 'regular', color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14}}>6ª Reunião do Conselho Real
          </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
            <View style={{width: 20, height: 20, backgroundColor: '#9747FF', color: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'regular', color: 'white'}}></Text>
            </View>
            <Text style={{marginLeft: 10, fontWeight: 'regular', color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14}}>Festival de Solstício</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center' , marginBottom: 10,}}>
            <View style={{width: 20, height: 20, backgroundColor: '#17A1FA', color: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'regular', color: 'white'}}></Text>
            </View>
            <Text style={{marginLeft: 10, fontWeight: 'regular', color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14}}>Revisão de menção</Text>
          </View>
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

  return_icon_container: {
    width: '100%',
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom:70,
},

return_button: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

});