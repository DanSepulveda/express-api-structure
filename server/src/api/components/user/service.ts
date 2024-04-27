import httpError from 'http-errors';
import User from './model';
import { USER_ERROR } from '@api/responseMessages';
import type { SignData, UserDoc } from './interfaces';

export const signupWithEmailAndPassword = async (
  data: SignData
): Promise<UserDoc> => {
  const user = await User.findByEmail(data.email, '_id');
  if (user !== null) throw httpError(400, USER_ERROR.registered);
  const newUser = new User({ account: { ...data } });
  await newUser.save();
  return newUser;
};

export const checkVerifiedStatus = async (
  data: string | UserDoc
): Promise<UserDoc> => {
  const selectedUser =
    typeof data === 'string' ? await User.findByEmail(data) : data;
  if (selectedUser === null) throw httpError(404, USER_ERROR.unregistered);
  if (selectedUser.account.verified) {
    throw httpError(400, USER_ERROR.verified);
  }
  return selectedUser;
};
