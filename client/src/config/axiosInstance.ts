import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL } from './app'

type ErrorWithConfig = AxiosError & { config: InternalAxiosRequestConfig }

function assertHasConfig(error: AxiosError): asserts error is ErrorWithConfig {
  if (!('config' in error)) {
    throw new Error('Request object without user found')
  }
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    // TODO: refreshToken and retry request
    assertHasConfig(error)
    console.log(error.config)
    return Promise.reject(error)
  },
)

export default axiosInstance
