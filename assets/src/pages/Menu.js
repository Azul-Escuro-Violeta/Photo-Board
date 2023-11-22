import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header/index.js'
import {useFonts} from 'expo-font';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const { width } = Dimensions.get('window');

export default function Menu() {
  const navigation = useNavigation();
  
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  function switchDay (number) {

    let dayWeek = 'N'

    switch (number) {
      case 0:
        dayWeek = 'D';
        break;
      case 1:
        dayWeek = 'S';
        break;
      case 2:
        dayWeek = 'T';
        break;
      case 3:
        dayWeek = 'Q';
        break;
      case 4:
        dayWeek = 'Q';
        break;
      case 5:
        dayWeek = 'S';
        break;
      case 6:
        dayWeek = 'S';
        break;
    }

    return dayWeek
  }

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');
   
        return {

          weekday: switchDay (parseInt(date.format('d'))),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <>
    <View style={styles.viewp}>
      <Header/>
      <TouchableOpacity
        style={styles.calendar_button}
        underlayColor="lightblue"
        onPress={() => navigation.navigate('Calendar')}
      >
          <Text style={styles.calendar_text}>Acessar Calendário</Text>
          <AntDesign name="right" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.swiperContainer}>
          <View style={styles.picker}>
            <Swiper
              index={1}
              ref={swiper}
              loop={false}
              showsPagination={false}
              onIndexChanged={ind => {
                if (ind === 1) {
                  return;
                }
                setTimeout(() => {
                  const newIndex = ind - 1;
                  const newWeek = week + newIndex;
                  setWeek(newWeek);
                  setValue(moment(value).add(newIndex, 'week').toDate());
                  swiper.current.scrollTo(1, false);
                }, 100);
              }}>
              {weeks.map((dates, index) => (
                <View
                  style={[styles.itemRow, { paddingHorizontal: 16 }]}
                  key={index}>
                  {dates.map((item, dateIndex) => {
                    const isActive =
                      value.toDateString() === item.date.toDateString();
                    return (
                      <TouchableWithoutFeedback
                        key={dateIndex}
                        onPress={() => setValue(item.date)}>
                        <View
                          style={
                            styles.item}>
                          <Text
                            style={[
                              styles.itemWeekday,
                              isActive && { color: '#fff' },
                            ]}>
                            {item.weekday}
                          </Text>
                          <View style={[
                                styles.itemDateContainer,
                                isActive && {backgroundColor: '#fff' },
                              ]}>
                            <Text
                              style={[
                                styles.itemDate,
                                isActive && {color: '#000' },
                              ]}>
                              {item.date.getDate()}
                            </Text>
                          </View>
                          <Text 
                            style={[
                            styles.itemtoday,
                            isActive && { color: '#fff', display: 'flex' },
                            ]}>
                              Hoje
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </View>
              ))}
            </Swiper>
          </View>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  viewp: {
    flex: 1,
    flexDirection: 'column',
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
  },

  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  swiperContainer: {
    paddingVertical: 24,
  },
  picker: {
    height: 'auto',
    maxHeight: 120,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 16,
  },

  content: {
    paddingHorizontal: 16,
  },

  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },

  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  
  },

  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    
  },
  
  itemWeekday: {
    fontSize: 20,
    fontWeight: '500',
    color: '#297447',
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },

  itemDate: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    
  },

  itemDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
    height: 42,
    width: 42,
    borderRadius: '50%',
  },

  itemtoday: {
    marginTop: 3,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    display: 'none',
  },
});