import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [restaurants, errorMessage, searchApi] = useRestaurants()

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage && <Text style={styles.textStyle}>{errorMessage}</Text>}
      <Text style={styles.textStyle}>
        We have found {restaurants.length} restaurants
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 16,
  },
})

export default SearchScreen
