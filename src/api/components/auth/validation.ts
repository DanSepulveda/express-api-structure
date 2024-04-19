import joi from 'joi';
import { email, password } from '@api/commonValidation';

export const signup = {
  body: joi.object({ email, password })
};

export const login = {
  body: joi.object({ email, password })
};

export const forgotPassword = {
  body: joi.object({ email })
};

export const resetPassword = {
  body: joi.object({
    password,
    confirmPassword: password.valid(joi.ref('password'))
  })
};

export const verificationEmail = {
  body: joi.object({ email })
};
