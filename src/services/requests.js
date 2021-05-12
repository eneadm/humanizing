import axios from 'axios'

export const authenticate = async function (){
  const response = await axios.post('/authenticate')

  return response.data.message
}
