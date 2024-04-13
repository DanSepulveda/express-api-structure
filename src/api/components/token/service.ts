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

export const generateActiveToken = async (userId: string): Promise<string> => {
  const newToken = new Token({
    token: crypto.randomUUID(),
    expires: moment().add(JWT.verificationExpDays, 'd'),
    userId,
    type: 'activation'
  });
  await newToken.save();
  return newToken.token;
};
