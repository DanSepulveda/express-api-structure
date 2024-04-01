import joi from 'joi';

export const signup = {
  body: joi.object({
    email: joi.string().email().trim().required().min(6),
    password: joi.string().trim().required().min(8)
  })
};

export const verifyAccount = {
  body: joi.object({})
};

export const login = {
  body: joi.object({})
};

export const logout = {
  body: joi.object({})
};

export const forgotPassword = {
  body: joi.object({
    email: joi.string().email().trim().required().min(6)
  })
};

export const resetPassword = {
  body: joi.object({})
};

export const sendVerificationEmail = {
  body: joi.object({})
};
