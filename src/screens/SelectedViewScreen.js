import { FlatList, Image, StyleSheet } from 'react-native'
import yelp from '../api/yelp'
import { useEffect, useState } from 'react'

const SelectedViewScreen = ({ navigation }) => {
  const [images, setImages] = useState([])
  const id = navigation.getParam('id')

  const getRestaurantDetails = async id => {
    const response = await yelp.get(`${id}`)
    setImages(response.data.photos)
  }

  useEffect(() => {
    getRestaurantDetails(id)
  }, [])
  if (!images.length) {
    return null
  }
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={images}
        keyExtractor={res => res}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
})

export default SelectedViewScreen
