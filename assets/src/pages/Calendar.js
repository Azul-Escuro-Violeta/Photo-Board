import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-center',
        backgroundColor: '#1E1E1E',
      },

    text: {
      color: 'white',
    },
});
