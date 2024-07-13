import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShippingInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Delivery Address</Text>
      <View style={styles.addressContainer}>
        <View style={styles.addressInfo}>
          <Text style={styles.name}>Albert Omoogun</Text>
          <Text style={styles.address}>Murtala Street no.2</Text>
          <Text style={styles.city}>Abuja - FCT</Text>
          <Text style={styles.phone}>+234 811-5235-400</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Shipping Method</Text>
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>
          Enter your shipping address to view available shipping methods.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  addressContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  city: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#ff3366',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  shippingContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  shippingText: {
    fontSize: 14,
    color: '#777',
  },
});

export default ShippingInfo;