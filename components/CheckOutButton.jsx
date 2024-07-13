import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';

const CheckOutButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderScreen')}
    >
    <View style={styles.button}>
      <Text style={styles.text}>CheckOutButton</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CheckOutButton

const styles = StyleSheet.create({
     button: {
        backgroundColor: "#DC1250",
        width: 200,
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 110,
        marginTop: 50,
     },
     text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
     }
})