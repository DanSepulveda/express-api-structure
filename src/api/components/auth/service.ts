import User from '../user/model';
import createHttpError from 'http-errors';
import { generateSalt } from '../../../utils/registerUser';
import type { BaseResponse, LoginRes, RecoveryReq, SignupReq } from './types';
import { USER_MSG } from '../responseMessages';

export const signup = async (user: SignupReq): Promise<LoginRes> => {
  const { email, password } = user;
  const isRegistered = await Promise.resolve(User.isRegistered(email));
  if (isRegistered) throw createHttpError(400, USER_MSG.registeredAccount);
  const salt = generateSalt();
  const newUser = new User({
    account: { email, password, salt }
  });
  newUser.hashPWD();
  const token = newUser.generateActiveToken();
  await newUser.save();

  return {
    success: true,
    message: USER_MSG.signupSuccess,
    token
  };
};

export const login = async (loginData: SignupReq): Promise<LoginRes> => {
  const { email, password } = loginData;
  const user = await User.findOne({ 'account.email': email });
  if (user == null) throw createHttpError(400, USER_MSG.noRegisteredAccount);
  if (!user.account.verified)
    throw createHttpError(400, USER_MSG.unverifiedAccount);
  if (!user.account.active)
    throw createHttpError(400, USER_MSG.disabledAccount);
  const match = user.comparePWD(password);
  if (!match) throw createHttpError(400, USER_MSG.wrongPassword);

  return {
    success: true,
    message: USER_MSG.loginSuccess,
    token: user.generateJWT()
  };
};

export const recoveryPassword = async (user: RecoveryReq): Promise<void> => {
  const isRegistered = await Promise.resolve(User.isRegistered(user.email));
  if (!isRegistered) throw createHttpError(400, USER_MSG.noRegisteredAccount);
};

export const verifyAccout = async (token: string): Promise<BaseResponse> => {
  const user = await User.updateOne(
    { 'account.activeToken': token },
    { 'account.verified': true, 'account.activeToken': '' }
  );

  if (user.modifiedCount === 0)
    throw createHttpError(400, USER_MSG.invalidToken);

  return {
    success: true,
    message: USER_MSG.verifySuccess
  };
};
