import User from '../user/model';
import createHttpError from 'http-errors';
import { generateSalt, hash } from '../../../utils/registerUser';
import type { BaseResponse, LoginRes, SignupReq } from './types';

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

export const login = async (loginData: SignupReq): Promise<LoginRes> => {
  const { email, password } = loginData;
  const user = await User.findOne({ 'account.email': email });
  if (user == null) throw createHttpError(400, 'User is not registered');
  if (!user.account.verified) throw createHttpError(400, 'Verification needed');
  if (!user.account.active) throw createHttpError(400, 'Account disabled');
  const match = user.comparePassword(password);
  if (!match) throw createHttpError(400, 'Wrong password');

  return {
    success: true,
    message: 'User logged in successfully',
    token: user.generateJWT()
  };
};
