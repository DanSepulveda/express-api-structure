import User from '@components/user/model';
import httpError from 'http-errors';
import type { UserDoc } from './interfaces';
import { USER_ERROR } from '@api/responseMessages';

export const verifyAccout = async (email: string): Promise<void> => {
  await User.updateOne(
    { 'account.email': email },
    { 'account.verified': true }
  );
};

export const loginWithEmailAndPassword = async (
  user: UserDoc,
  password: string
): Promise<void> => {
  const match: boolean = user.comparePWD(password);
  if (!match) throw httpError(400, USER_ERROR.wrongPassword);
};

export const checkAccountStatus = async (email: string): Promise<UserDoc> => {
  const user = await User.findByEmail(email);
  if (user === null) throw httpError(404, USER_ERROR.unregistered);
  if (!user.account.verified) throw httpError(400, USER_ERROR.unverified);
  if (!user.account.active) throw httpError(403, USER_ERROR.disabled);
  return user;
};

export const resetPassword = async (
  user: UserDoc,
  password: string
): Promise<void> => {
  user.account.password = password;
  await user.save();
};
