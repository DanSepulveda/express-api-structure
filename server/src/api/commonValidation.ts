import joi from 'joi';

export const email = joi
  .string()
  .email()
  .trim()
  .required()
  .min(6)
  .messages({ 'string.email': 'Invalid email format' });
export const password = joi.string().trim().required().min(8);
