import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 50;

export default function Header() {
    return (
        <View style={styles.container}>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        paddingTop: statusBarHeight,
    },

})