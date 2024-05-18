import type {
  BaseResponse,
  LoginResponse,
  ResetPasswordBody,
  SignupBody,
  VerificationBody,
} from './types'
import apiSlice from '@redux/api/apiSlice'
import { loginUser, logoutUser } from '@redux/app/appSlice'

const userSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    refreshToken: build.query<LoginResponse, void>({
      query: () => ({
        url: '/auth/refresh-token',
        alert: false,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginUser(data.user))
        } catch {
          dispatch(logoutUser())
          dispatch(apiSlice.util.resetApiState())
        }
      },
    }),
    login: build.mutation<LoginResponse, SignupBody>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        data,
        alert: false,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginUser(data.user))
        } catch {
          null
        }
      },
    }),
    logout: build.mutation<BaseResponse, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        alert: false,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logoutUser())
          dispatch(apiSlice.util.resetApiState())
        } catch {
          null
        }
      },
    }),
    signup: build.mutation<BaseResponse, SignupBody>({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        data,
        alert: false,
      }),
    }),
    verifyAccount: build.query<BaseResponse, string>({
      query: (token) => ({
        url: '/auth/verify-account',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        alert: false,
      }),
    }),
    // TODO: not implemented
    sendVerification: build.mutation<BaseResponse, VerificationBody>({
      query: (data) => ({
        url: '/auth/verification-email',
        method: 'POST',
        data,
      }),
    }),
    preValidate: build.query<BaseResponse, string>({
      query: (token) => ({
        url: '/auth/pre-validate',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        alert: false,
      }),
    }),
    forgotPassword: build.mutation<BaseResponse, VerificationBody>({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        data,
      }),
    }),
    resetPassword: build.mutation<BaseResponse, ResetPasswordBody>({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        data: data.form,
        headers: {
          Authorization: 'Bearer ' + data.token,
        },
      }),
    }),
  }),
})

export const {
  useLazyRefreshTokenQuery,
  usePreValidateQuery,
  useVerifyAccountQuery,
  useForgotPasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useSignupMutation,
} = userSlice
