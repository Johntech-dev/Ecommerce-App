import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DisplayProducts from '../components/DisplayProducts'
import DisplayProductHeader from '../components/DisplayProductHeader'
import Description from '../components/Description'

const SingleProductScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.head}>
        <Image style={styles.img} source={require('../assets/arrow.png')} />
        <Image style={styles.img}  source={require('../assets/bag.png')} />
      </View>
      <DisplayProducts />
      </View>
      <DisplayProductHeader />
      <Description />
    </ScrollView>
  )
}

export default SingleProductScreen

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    backgroundColor: "#F6FAFF",
    borderRadius: 15,
    border: '1px solid',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  img : {
     width: 45,
     height: 45,
  },
})