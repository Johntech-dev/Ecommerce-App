import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Description = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
         <Text style={styles.description}>Description</Text>
         <Text style={styles.paragraph}>Get a little lift from Men's Multivitamins, featuring a comprehensive blend of essential vitamins and minerals tailored for men's health. Experience sustained energy and overall well-being throughout the day. Men's Multivitamins offer a carefully formulated combination of nutrients to support immune function, muscle health, and mental clarity. This unique formulation makes a fresh statement for improved daily vitality and optimal performance.</Text>
      </View>
      <View style={styles.container1}>
        <View>
         <Text style={styles.priceDescrition}>Total Price</Text>
         <Text style={styles.price}>₦ 1,198.00</Text>
        </View>
        <View style={styles.addCart}>
            <Image source={require('../assets/icon.png')} />
            <Text style={styles.cartText}>Add to Cart</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Description

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        color: '#000000',
        padding: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    price:{
        color: 'black',
        fontWeight: 'bold',
    },
    addCart: {
       backgroundColor: '#DC1250',
       borderRadius: 15,
       padding: 10,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       gap: 18,
       width: 200,
       color: '#ffffff',
    },
    cartText: {
      color: '#ffffff',
    },
    paragraph: {
        fontSize: 12,
        color: '#666666',
        padding: 20,
        
    },
    container1: {
       flexDirection: 'row',
       padding: 20,
       justifyContent: 'space-between',
       alignItems: 'center',
    },
    priceDescrition: {
        color: '#666666',
        fontSize: 10,
    }
})