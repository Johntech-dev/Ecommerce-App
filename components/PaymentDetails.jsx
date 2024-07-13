import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Paystack</Text>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' }} />
          <Image style={styles.icon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' }} />
          <Image style={styles.icon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' }} />
        </View>
        <Image style={styles.cardIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Credit-card.svg' }} />
        <Text style={styles.description}>After clicking “pay now” you will be redirected to paystack to complete your purchase securely.</Text>
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
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  paymentContainer: {
    backgroundColor: '#f3ecff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  paymentTitle: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 24,
    resizeMode: 'contain',
  },
  cardIcon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    color: '#333',
  },
  payNowButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  payNowText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentMethod;
