import User from './model';
import createHttpError from 'http-errors';
import type { SignData } from './interfaces';
import { USER_ERROR } from '../responseMessages';

export const signupWithEmailAndPassword = async (
  data: SignData
): Promise<void> => {
  const user = await Promise.resolve(User.findByEmail(data.email));
  console.log(user);
  if (user !== null) throw createHttpError(400, USER_ERROR.registered);
  const newUser = new User({ account: { ...data } });
  await newUser.save();
};

export const checkVerifiedStatus = async (email: string): Promise<void> => {
  const user = User.findByEmail(email, 'account.verified');
  if (user === null) throw createHttpError(404, USER_ERROR.unregistered);
  if (user.account.verified) {
    throw createHttpError(400, USER_ERROR.verified);
  }
};
