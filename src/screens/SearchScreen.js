import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [restaurants, errorMessage, searchApi] = useRestaurants()
  const filterRestaurantsByPrice = price => {
    return restaurants.filter(res => res.price === price)
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage && <Text style={styles.textStyle}>{errorMessage}</Text>}
      <ScrollView>
        <RestaurantsList
          title='Cost Effective'
          restaurants={filterRestaurantsByPrice('£')}
        />
        <RestaurantsList
          title='Bit Pricier'
          restaurants={filterRestaurantsByPrice('££')}
        />
        <RestaurantsList
          title='Big Spender'
          restaurants={filterRestaurantsByPrice('£££')}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 16,
  },
})

export default SearchScreen
