import User from '../user/model';
import createHttpError from 'http-errors';
import { generateSalt, hash } from '../../../utils/registerUser';
import type { BaseResponse, SignupReq } from './types';

export const signup = async (user: SignupReq): Promise<BaseResponse> => {
  const { email, password } = user;
  const isRegistered = await Promise.resolve(User.isRegistered(email));
  if (isRegistered) throw createHttpError(400, 'Email already in use');
  const salt = generateSalt();
  const hashedPassword = hash(salt, password);
  const newUser = new User({
    account: { email, hashedPassword, salt }
  });
  await newUser.save();

  return {
    success: true,
    message: 'User created successfully'
  };
};
