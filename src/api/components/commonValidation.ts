import joi from 'joi';

export const email = joi.string().email().trim().required().min(6);
export const password = joi.string().trim().required().min(8);
