import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartNavbar from '../components/CartNavbar'
import CartDetails from '../components/CartDetails'
import CheckOutButton from '../components/CheckOutButton'

const CartScreen = () => {
  return (
    <ScrollView>
   <CartNavbar />
      <View style={styles.Cartheader}>
        <Text style={styles.cartheadertext}>Cart Summary</Text>
      </View>
      <CartDetails />
      <CheckOutButton />
    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    Cartheader: {
      padding: 10,
      backgroundColor: '#f1f1f1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartheadertext: {
      fontSize: 20,
      fontWeight: 'bold',
    },
})