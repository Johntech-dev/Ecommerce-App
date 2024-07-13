import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Filter = () => {
  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/tiles.png')} />
        <Image style={styles.img} source={require('../assets/image.png')} />
      </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
       justifyContent: "flex-end",
       marginTop: 10,
       gap: 20,
    },
    img: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
})