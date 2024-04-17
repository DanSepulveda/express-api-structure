import joi from 'joi';
import { email, password } from '@api/commonValidation';

export const signup = {
  body: joi.object({
    email,
    password
  })
};

export const login = {
  body: joi.object({
    email,
    password
  })
};

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
    password,
    confirmPassword: password
  })
};

export const verificationEmail = {
  body: joi.object({
    email
  })
};
