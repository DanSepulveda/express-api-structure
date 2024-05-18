// * Request interfaces
export interface SignupBody {
  email: string
  password: string
}

export interface VerificationBody {
  email: string
}

export interface ResetPasswordBody {
  form: {
    password: string
    confirmPassword: string
  }
  token: string
}

// * Response interfaces
export interface BaseResponse {
  success: boolean
  message: string
}

// TODO: define user props
export interface LoginResponse extends BaseResponse {
  user: unknown
}
