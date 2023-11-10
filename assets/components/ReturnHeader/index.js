import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'
import {AntDesign} from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 63;

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
            <AntDesign name="left" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        backgroundColor: '#1E1E1E',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
    },

    returnText: {
        
    }

})