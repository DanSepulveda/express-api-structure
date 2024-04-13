import User from '../user/model';
import createHttpError from 'http-errors';
import type { BaseResponse, LoginRes, SignupReq } from './interfaces';
import { AUTH_ERROR, USER_MSG } from '../responseMessages';

export const signup = async (data: SignupReq): Promise<string> => {
  const user = await Promise.resolve(User.findByEmail(data.email));
  if (user !== null) throw createHttpError(400, AUTH_ERROR.registered);
  const newUser = new User({ account: { ...data } });
  await newUser.save();
  return newUser._id;
};

export const getVerificationToken = async (email: string): Promise<string> => {
  const user = await Promise.resolve(
    User.findByEmail(email, 'account.verified')
  );
  if (user === null) throw createHttpError(404, USER_MSG.noRegisteredAccount);
  if (user.account.verified) {
    throw createHttpError(400, USER_MSG.alreadyVerified);
  }
  const token = 'user.generateActiveToken();';
  await user.save();
  return token;
};

export const login = async (loginData: SignupReq): Promise<LoginRes> => {
  const { email, password } = loginData;
  const user = await User.findOne({ 'account.email': email });
  if (user == null) throw createHttpError(400, USER_MSG.noRegisteredAccount);
  if (!user.account.verified)
    throw createHttpError(400, USER_MSG.unverifiedAccount);
  if (!user.account.active)
    throw createHttpError(400, USER_MSG.disabledAccount);
  const match: boolean = user.comparePWD(password);
  if (!match) throw createHttpError(400, USER_MSG.wrongPassword);

  return {
    success: true,
    message: USER_MSG.loginSuccess,
    token: user.generateJWT()
  };
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

export const recoveryPassword = async (email: string): Promise<void> => {
  const user = await Promise.resolve(User.findOne({ 'account.email': email }));
  if (user === null) throw createHttpError(400, USER_MSG.noRegisteredAccount);
};
