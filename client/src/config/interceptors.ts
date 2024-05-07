import axios from 'axios'
import toast from 'react-hot-toast'
import { API_BASE_URL } from './app'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // extrar token de LS o state para enviarlo en la solicitud
    console.log('Axios request interceptor success')
    console.log('Config: ', config)
    console.log('__________________________________')
    return config
  },
  (error) => {
    console.log('Axios request interceptor error')
    toast.error('Error: ', error)
    console.log('__________________________________')
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Axios response interceptor success')
    console.log('Response: ', response)
    console.log('__________________________________')
    return response
  },
  (error) => {
    console.log('Axios response interceptor error')
    console.log('Error: ', error)
    console.log('__________________________________')
    return Promise.reject(error)
  },
)

export default axiosInstance
