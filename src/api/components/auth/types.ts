export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface SignupReq {
  email: string;
  password: string;
}

export interface LoginRes extends BaseResponse {
  token: string;
}
