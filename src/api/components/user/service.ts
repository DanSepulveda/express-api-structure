import User from './model';
import createHttpError from 'http-errors';
import type { SignData } from './interfaces';
import { USER_ERROR } from '../responseMessages';

export const signupWithEmailAndPassword = async (
  data: SignData
): Promise<void> => {
  const user = User.findByEmail(data.email);
  if (user !== null) throw createHttpError(400, USER_ERROR.registered);
  const newUser = new User({ account: { ...data } });
  await newUser.save();
};
