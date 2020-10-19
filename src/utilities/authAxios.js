import axios from 'axios'

export const authAxios = () => {
  const token = localStorage.getItem('token')


  return axios.create({
    baseURL: '',
    headers: {
      authorization: token
    }
  })
}