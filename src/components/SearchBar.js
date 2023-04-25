import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

const SearchBar = ({ searchTerm, setSearchTerm, onTermSubmit }) => {
  return (
    <View style={styles.searchInputWrapper}>
      <Fontisto
        name='search'
        size={28}
        color='black'
        style={styles.searchIcon}
      />
      <TextInput
        value={searchTerm}
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search for nearby restaurants'
        onChangeText={(val) => setSearchTerm(val)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInputWrapper: {
    backgroundColor: '#DCDCDC',
    borderRadius: 4,
    height: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
})

export default SearchBar
