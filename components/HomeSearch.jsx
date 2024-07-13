import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={require('../assets/search-icon.png')} style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder='Search For Products....' />
        <Image source={require('../assets/filter.png')} style={[styles.icon, styles.rightIcon]} />
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 30,
    width: 356,
    height: 56,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});