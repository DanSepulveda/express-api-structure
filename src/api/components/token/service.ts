import crypto from 'crypto';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import Token from './model';
import { JWT } from '../../../config/app';
import { TOKEN_ERROR } from '../../responseMessages';
import type { AuthTokens } from './interfaces';
import type { UserDoc } from '@components/user/interfaces';

export const addTokenToBL = async (
  token: string,
  type: string
): Promise<void> => {
  const payload = jwt.verify(token, JWT.secret) as jwt.TokenBody;
  if (payload.type !== type) throw createHttpError(400, TOKEN_ERROR.invalid);
  const date = moment.unix(payload.exp);
  const newToken = new Token({
    token,
    expires: date,
    email: payload.email,
    type: payload.type,
    blacklisted: true
  });
  await newToken.save();
};

export const genAuthTokens = async (user: UserDoc): Promise<AuthTokens> => {
  const authToken = user.generateJWT('auth');
  const refreshToken = user.generateJWT('refresh');
  return { authToken, refreshToken };
};

export const genRecoveryToken = async (user: UserDoc): Promise<string> => {
  const token = user.generateJWT('reset');
  return token;
};

export const genActivationToken = async (email: string): Promise<string> => {
  const newToken = await Token.findOneAndUpdate(
    { email },
    {
      token: crypto.randomUUID(),
      expires: moment().add(JWT.expiration.activation, 'd'),
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

export const deleteActivationToken = async (token: string): Promise<string> => {
  const searchedToken = await Token.findOne({ token, type: 'activation' });
  if (searchedToken === null) throw createHttpError(404, TOKEN_ERROR.invalid);
  const isExpired = searchedToken.isExpired();
  if (isExpired) throw createHttpError(400, TOKEN_ERROR.expired);
  await Token.findOneAndDelete({ token });
  return searchedToken.email;
};

export const checkBlacklistedToken = async (token: string): Promise<void> => {
  const searchedToken = await Token.findOne({ token });
  if (searchedToken !== null) throw createHttpError(400, TOKEN_ERROR.invalid);
};
