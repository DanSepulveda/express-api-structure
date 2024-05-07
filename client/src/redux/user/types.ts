export interface BaseResponse {
  success: boolean
  message: string
}

export interface SignupBody {
  email: string
  password: string
}

export interface VerificationBody {
  email: string
}
