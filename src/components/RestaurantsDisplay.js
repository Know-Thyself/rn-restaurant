import { View, Text, Image, StyleSheet } from 'react-native'

const RestaurantsDisplay = ({ restaurant }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews{' '}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f0eee0',
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default RestaurantsDisplay
