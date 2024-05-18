import { API_BASE_URL } from '@config/app'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axiosInstance from '@config/axiosInstance'
import toast from '@utils/alert'

interface SuccessResponse {
  success: boolean
  message: string
}

export type ErrorResponse = {
  status: number | undefined
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
      alert?: boolean
    },
    unknown,
    ErrorResponse
  > =>
  async ({ url, method, data, params, headers, alert = true }) => {
    let toastId: string | null = null

    if (alert) {
      toastId = toast.loading()
    }

    try {
      const response = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })

      const axiosResponse: SuccessResponse = response.data
      if (toastId !== null) toast.success(axiosResponse.message, toastId)
      return { data: response.data }
    } catch (axiosError) {
      const error = axiosError as AxiosError
      const response = error.response as unknown as ErrorResponse
      if (toastId !== null) toast.error(response.data.message, toastId)

      return {
        error: {
          status: response.status,
          data: response.data,
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
