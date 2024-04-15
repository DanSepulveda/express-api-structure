import crypto from 'crypto';
import moment from 'moment';
import Token from './model';
import { JWT } from '../../../config/constants';
import createHttpError from 'http-errors';
import { TOKEN_ERROR } from '../responseMessages';
import type { AuthTokens } from './interfaces';
import type { UserModel } from '../user/interfaces';

export const generateToken = async (): Promise<string> => {
  return '';
};

export const verifyToken = async (): Promise<void> => {};

export const addTokenToBL = async (): Promise<void> => {};

export const clearExpiredTokens = async (): Promise<void> => {};

export const isTokenExpired = (date: Date): boolean => {
  const actualDate = moment();
  const expirationDate = moment(date);
  return expirationDate.diff(actualDate) < 0;
};

export const genAuthTokens = async (
  user: InstanceType<UserModel>
): Promise<AuthTokens> => {
  const authToken = user.generateJWT('auth');
  const refreshToken = user.generateJWT('refresh');
  return { authToken, refreshToken };
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
  const searchedToken = await Token.findOne({ token });
  if (searchedToken === null) throw createHttpError(TOKEN_ERROR.invalid);
  const isExpired = isTokenExpired(searchedToken.expires);
  if (isExpired) throw createHttpError(400, TOKEN_ERROR.expired);
  await Token.findOneAndDelete({ token });
  return searchedToken.email;
};
