import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    searchApi('restaurants')
  }, [])

  const searchApi = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'Birmigham',
        },
      })
      setRestaurants(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  return [restaurants, errorMessage, searchApi]
}
