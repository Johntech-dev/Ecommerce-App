import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CardDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={require('../assets/medical-bottles.png')} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>Multi Vitamins For Men</Text>
        <Text style={styles.productBrand}>Millions & Millions</Text>
        <View style={styles.quantityContainer}>
        <Text style={styles.productPrice}>₦ 4,000.00</Text>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={String(quantity)}
            editable={false}
          />
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.heartButton}>
        <FontAwesome name="heart-o" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E9EC',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBrand: {
    color: '#A9A9A9',
    marginVertical: 5,
  },
  productPrice: {
    color: '#DC1250',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 18,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E6E9EC',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#606060',
  },
  quantityInput: {
    width: 40,
    height: 30,
    textAlign: 'center',
    borderColor: '#E6E9EC',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CardDetails;
