import User from '../user/model';
import createHttpError from 'http-errors';
import { generateSalt, hash } from '../../../utils/registerUser';
import type { BaseResponse, LoginRes, SignupReq } from './types';
import { USER_MSG } from '../responseMessages';

export const signup = async (user: SignupReq): Promise<BaseResponse> => {
  const { email, password } = user;
  const isRegistered = await Promise.resolve(User.isRegistered(email));
  if (isRegistered) throw createHttpError(400, USER_MSG.registeredAccount);
  const salt = generateSalt();
  const hashedPassword = hash(salt, password);
  const newUser = new User({
    account: { email, hashedPassword, salt }
  });
  await newUser.save();

  return {
    success: true,
    message: USER_MSG.signupSuccess
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
  const match = user.comparePassword(password);
  if (!match) throw createHttpError(400, USER_MSG.wrongPassword);

  return {
    success: true,
    message: USER_MSG.loginSuccess,
    token: user.generateJWT()
  };
};
