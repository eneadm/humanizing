import axios from 'axios'

export const authenticate = async (credentials) => {
  const response = await axios.post('/authenticate', credentials)

  return response.data.message
}

export const persistGraph = async (graph) => {
  const response = await axios.post('/graph', graph)

  return response.data.message
}

export const fetchGraph = async () => {
  const response = await axios.get('/graph')

  return response.data
}
