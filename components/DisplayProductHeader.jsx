import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumericInput from 'react-native-numeric-input'

const DisplayProductHeader = () => {
  return (
    <View style={styles.container}>
     <View>
     <Text style={styles.Text1}>Multivitamins for men</Text>
     <Text style={styles.text}>Multivitamins</Text>
     <View style={styles.rating}>
        <Image source={require('../assets/Stars.png')} />
        <Text>(320 Review)</Text>
     </View>
     </View>
     <View>
   <NumericInput />
     </View>
    </View>
  )
}

export default DisplayProductHeader

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent:'space-between',
      padding: 20
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    text: {
     fontSize: 12,
     fontWeight: 'bold',
     marginBottom: 10,
     color: '#666666'
    },
    numeric: {
    },
    Text1: {
     fontSize: 20,
     fontWeight: 'bold',
     marginTop: 10,
     marginBottom: 10,
    },
  
})