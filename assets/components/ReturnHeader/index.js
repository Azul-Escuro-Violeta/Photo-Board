import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 35;

export default function Header() {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../fonts/Poppins-Medium.ttf')
      });
    
    if (!fontsLoaded) {
        return undefined;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.returnText}>Voltar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingTop: statusBarHeight,
    },

    returnText: {
        
    }

})