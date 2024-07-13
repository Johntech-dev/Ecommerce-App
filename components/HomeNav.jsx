import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const HomeNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
       <Image style={styles.img} source={require('../assets/menu.png')} />
       <View style={styles.textContainer}>
       <Text style={styles.text1}>Timbu</Text>
       <Text style={styles.text2}>Med</Text>
       </View>
       <View style={styles.container2}>
         <Image style={styles.img} source={require('../assets/cart.png')} />
         <Image style={styles.img} source={require('../assets/notification.png')} />
       </View>
       </View>  
    </View>
  )
}

export default HomeNav

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    
  },
  img: {
    width: 22,
    height: 22,
    marginLeft: 10,
    // marginTop: 40,
  },
  text1: {
    color: '#dc1250',
    fontSize: 24,   
    // marginTop: 37,
  },
  text2: {
    color: "#a9a9a9",
    fontSize: 24,
    // marginTop: 7,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginLeft: 130,
  },
})