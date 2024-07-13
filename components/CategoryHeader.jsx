import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Category</Text>
      <Text style={styles.text2}>Vitamins</Text>
    </View>
  )
}

export default CategoryHeader

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: 10,
        marginTop: 10,
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DC1250",
    }
})