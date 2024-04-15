import joi from 'joi';
import { email, password } from '../commonValidation';

export const signup = {
  body: joi.object({
    email,
    password
  })
};

export const login = signup;

export const verifyAccount = {
  query: joi.object({
    token: joi.string().required()
  })
};

export const forgotPassword = {
  body: joi.object({
    email
  })
};

export const resetPassword = {
  body: joi.object({
    email,
    password,
    confirmPassword: password
  })
};

export const verificationEmail = forgotPassword;
