import crypto from 'crypto';
import moment from 'moment';
import Token from './model';
import { JWT } from '../../../config/constants';
import createHttpError from 'http-errors';
import { AUTH_ERROR } from '../responseMessages';

export const generateToken = async (): Promise<string> => {
  return '';
};

export const verifyToken = async (): Promise<void> => {};

export const addTokenToBL = async (): Promise<void> => {};

export const clearExpiredTokens = async (): Promise<void> => {};

export const generateActiveToken = async (email: string): Promise<string> => {
  const newToken = await Token.findOneAndUpdate(
    { email },
    {
      token: crypto.randomUUID(),
      expires: moment().add(JWT.verificationExpDays, 'd'),
      email,
      type: 'activation'
    },
    {
      new: true,
      upsert: true
    }
  );
  return newToken.token;
};

export const deleteActiveToken = async (token: string): Promise<string> => {
  const deleted = await Token.findOneAndDelete({ token });
  if (deleted === null) throw createHttpError(AUTH_ERROR.invalidToken);
  return deleted.email;
};
