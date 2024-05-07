import { API_BASE_URL } from '@config/app'
import { createApi } from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axiosInstance from '@config/interceptors'
import toast from 'react-hot-toast'

export interface Payload {
  status: number
  data: {
    success: boolean
    message: string
  }
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    console.log('ApiSlice axios base query')
    try {
      const response = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })
      return { data: response.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      const data = err.response as unknown as Payload
      console.log(data)
      toast.error(data.data.message)
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

const apiSlice = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: 600,
  tagTypes: [],
  baseQuery: axiosBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: () => ({}),
})

export default apiSlice
