import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 

export default function Calendar() {
  return (
      <View style={styles.return_icon_container}>
        <TouchableOpacity
        style={styles.return_button}
        underlayColor="lightblue"
       >
        <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    return_icon_container: {
        width: '100%',
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    return_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});
