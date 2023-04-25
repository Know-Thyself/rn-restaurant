import axios from 'axios'
import { API_URL, API_KEY } from '@env'
export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})
