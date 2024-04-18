import createHttpError from 'http-errors';
import User from './model';
import type { SignData, UserDoc } from './interfaces';
import { USER_ERROR } from '@api/responseMessages';

export const signupWithEmailAndPassword = async (
  data: SignData
): Promise<UserDoc> => {
  const user = await User.findByEmail(data.email, '_id');
  if (user !== null) throw createHttpError(400, USER_ERROR.registered);
  const newUser = new User({ account: { ...data } });
  await newUser.save();
  return newUser;
};

export const checkVerifiedStatus = async (email: string): Promise<UserDoc> => {
  const user = await User.findByEmail(email);
  if (user === null) throw createHttpError(404, USER_ERROR.unregistered);
  if (user.account.verified) {
    throw createHttpError(400, USER_ERROR.verified);
  }
  return user;
};
