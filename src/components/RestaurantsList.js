import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestaurantsDisplay from './RestaurantsDisplay'
import { withNavigation } from 'react-navigation'

const RestaurantsList = ({ title, restaurants, navigation }) => {
  return (
    <View style={styles.listWrapper}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* <Text>{restaurants.length} restaurants</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={res => res.id}
        renderItem={({ item }) => {
          return (
            <RestaurantsDisplay navigation={navigation} restaurant={item} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listWrapper: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 4,
  },
})

export default withNavigation(RestaurantsList)
