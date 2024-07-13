import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Products = () => {     
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.timbu.cloud/products', {
        params: {
          organization_id: 'c85a2c75b0fb4aa39e77f64fc745ea97',
          reverse_sort: false,
          page: 1,
          size: 10,
          Appid: 'YNDL9X5IC18AX85',
          Apikey: '8b1145491d57428197ef67f6c82da62c20240704212401327534',
        },
      });
      setProducts(response.data.items);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  if (!products || products.length === 0) {
    return <Text style={styles.noProductsText}>No products found</Text>;
  }

  const renderProduct = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.productCard, index % 2 === 0 ? styles.productCardLeft : styles.productCardRight]}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image source={{ uri: `https://api.timbu.cloud/images/${item.photos?.[0]?.url}` }} style={styles.image} />
      <View style={styles.productDetails}>
        <View style={styles.productInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.ratingcontainer}>
            <Text style={styles.nia}>Niacin</Text>
            <View style={styles.borderContainer}>
            <Text style={styles.gram}>1.8grams</Text>
            </View>
          </View>
          <View style={styles.star}>
                <Image source={require('../assets/Stars.png')} />
                <Text style={styles.text}>(4.8 Rating)</Text>
              </View>
          <Text style={styles.price}>
            {item.current_price && item.current_price.length > 0 ? `₦ ${item.current_price[0].NGN}` : 'Price not available'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: '#F9FBFD',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingcontainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
   color: "#606060",
   fontSize: 12,
  },
  gram: {
    // border: '1px solid black',
    // borderRadius: '5px',
    fontSize: 10,
  },
  borderContainer: {
    borderWidth: 2,
    borderColor: '#E6EAEE', // Customize the border color
    padding: 2,
    borderRadius: 5,
  },
  nia: {
    color: "#A9A9A9"
  },
  errorText: {      
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
  noProductsText: {
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
  },
  productCard: {
    backgroundColor: '#F9FBFD',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E9EC',
    margin: 8,
    elevation: 3,
    flexBasis: '48%',
  },
  productCardLeft: {
    marginRight: 4, // Adjust spacing between columns
  },
  productCardRight: {
    marginLeft: 4, // Adjust spacing between columns
  },
  image: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
  },
  productDetails: {
    padding: 10,
  },
  productInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#DC1250',
    marginBottom: 8,
  },
});

export default Products;
