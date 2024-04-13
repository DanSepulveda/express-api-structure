import crypto from 'crypto';
import moment from 'moment';
import Token from './model';
import { JWT } from '../../../config/constants';

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
