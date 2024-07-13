import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.title}>Order Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>₦ 15,000.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>Tax:</Text>
          <Text style={styles.value}>₦ 500.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>Shipping:</Text>
          <Text style={styles.value}>₦ 1,000.00</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>₦ 16,500.00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payNowButton}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>
          <Text style={styles.icon}>🏷️ </Text>
          Use discount/Loyalties <Text style={styles.optional}>(Optional)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  summaryContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff3366',
  },
  payNowButton: {
    backgroundColor: '#ff3366',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  payNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  discountText: {
    fontSize: 14,
    color: '#555',
  },
  icon: {
    fontSize: 18,
    color: '#555',
  },
  optional: {
    color: '#aaa',
  },
});

export default OrderSummary;