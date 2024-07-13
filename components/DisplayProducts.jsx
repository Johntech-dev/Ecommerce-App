import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DisplayProducts = () => {
  return (
    <View>
       <View>
        <Image style={styles.img} source={require('../assets/2.png')} />
       </View>
    </View>
  )
}

export default DisplayProducts

const styles = StyleSheet.create({
    img: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginVertical: 10
        ,
        alignItems: 'center',
    }
 
})