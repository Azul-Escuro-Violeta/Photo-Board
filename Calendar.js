import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useFonts} from 'expo-font';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text>Olá!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1E1E1E',
      },
});
