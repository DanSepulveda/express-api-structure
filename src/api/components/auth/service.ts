import User from '@components/user/model';
import createHttpError from 'http-errors';
import type { SignData, UserDoc } from './interfaces';
import { TOKEN_ERROR, USER_ERROR } from '@api/responseMessages';

export const verifyAccout = async (email: string): Promise<void> => {
  const user = await User.updateOne(
    { 'account.email': email },
    { 'account.verified': true }
  );

  if (user.modifiedCount === 0) throw createHttpError(400, TOKEN_ERROR.invalid);
};

export const loginWithEmailAndPassword = async (
  loginData: SignData
): Promise<UserDoc> => {
  const { email, password } = loginData;
  const user = await User.findByEmail(email);
  if (user === null) throw createHttpError(404, USER_ERROR.unregistered);
  if (!user.account.verified) throw createHttpError(400, USER_ERROR.unverified);
  if (!user.account.active) throw createHttpError(403, USER_ERROR.disabled);
  const match: boolean = user.comparePWD(password);
  if (!match) throw createHttpError(400, USER_ERROR.wrongPassword);
  return user;
};

export const checkAccountStatus = async (email: string): Promise<UserDoc> => {
  const user = await User.findByEmail(email);
  if (user === null) throw createHttpError(404, USER_ERROR.unregistered);
  if (!user.account.verified) throw createHttpError(400, USER_ERROR.unverified);
  if (!user.account.active) throw createHttpError(403, USER_ERROR.disabled);
  return user;
};

export const resetPassword = async (
  password: string,
  email: string
): Promise<void> => {
  const user = await User.findByEmail(email);
  if (user === null) throw createHttpError(404, USER_ERROR.unregistered);
  user.account.password = password;
  await user.save();
};
