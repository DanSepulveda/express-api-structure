import moment from 'moment';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import Token from './model';
import { JWT } from '../../../config/app';
import { TOKEN_ERROR } from '../../responseMessages';
import type { AuthTokens } from './interfaces';
import type { UserDoc } from '@components/user/interfaces';

// !verificar
export const upsertToken = async (token: string): Promise<void> => {
  const payload = jwt.verify(token, JWT.secret) as jwt.TokenBody;

  await Token.findOneAndUpdate(
    { email: payload.email, type: payload.type },
    {
      token,
      email: payload.email,
      expires: moment.unix(payload.exp),
      type: payload.type
    },
    { new: true, upsert: true }
  );
};

// !verify
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

export const genActivationToken = async (user: UserDoc): Promise<string> => {
  const token = user.generateJWT('activation');
  await upsertToken(token);
  return token;
};

export const genAuthTokens = async (user: UserDoc): Promise<AuthTokens> => {
  const authToken = user.generateJWT('auth');
  const refreshToken = user.generateJWT('refresh');
  await upsertToken(refreshToken);
  return { authToken, refreshToken };
};

export const genResetToken = async (user: UserDoc): Promise<string> => {
  const token = user.generateJWT('reset');
  await upsertToken(token);
  return token;
};

export const deleteToken = async (
  token: string,
  type: string
): Promise<void> => {
  const deleted = await Token.deleteOne({ type, token });
  if (deleted.deletedCount === 0)
    throw createHttpError(404, TOKEN_ERROR.invalid);
};

// !verificar
export const checkBlacklistedToken = async (token: string): Promise<void> => {
  const searchedToken = await Token.findOne({ token });
  if (searchedToken !== null) throw createHttpError(400, TOKEN_ERROR.invalid);
};
