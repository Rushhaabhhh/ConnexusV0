import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router';

const RootLayout = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Connexus</Text>
      
    // </View>
    <Slot name="root"/>
  )
}

export default RootLayout

// const styles = StyleSheet.create({
//     container : {
//         display : 'flex',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'beige',
//     },
//     title : {
//         fontSize: 60,
//         fontWeight: 'bold',
//         color: 'brown',

//     }
// })