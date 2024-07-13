import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeNav from '../components/HomeNav'
import HomeSearch from '../components/HomeSearch'
import CategoryHeader from '../components/CategoryHeader'
import Filter from '../components/Filter'
import Products from '../components/Products'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
    <HomeNav />
    <HomeSearch />
    <CategoryHeader />
    <Filter />
    <Products />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
    }
})