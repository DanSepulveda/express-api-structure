import apiSlice from '@redux/api/apiSlice'
import { BaseResponse, SignupBody, VerificationBody } from './types'

const userSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<BaseResponse, SignupBody>({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        data,
      }),
    }),
    sendVerification: build.mutation<BaseResponse, VerificationBody>({
      query: (data) => ({
        url: '/auth/verification-email',
        method: 'POST',
        data,
      }),
    }),
  }),
})

export const { useSignupMutation } = userSlice
