import moment from 'moment';
import jwt from 'jsonwebtoken';
import httpError from 'http-errors';
import Token from './model';
import { JWT } from '../../../config/app';
import { TOKEN_ERROR } from '../../responseMessages';
import type { AuthTokens } from './interfaces';
import type { UserDoc } from '@components/user/interfaces';

const upsertToken = async (
  token: string,
  payload: jwt.TokenBody
): Promise<void> => {
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

const saveToken = async (
  token: string,
  payload: jwt.TokenBody
): Promise<void> => {
  const { email, type, exp } = payload;

  const newToken = new Token({
    token,
    email,
    expires: moment.unix(exp),
    type
  });

  await newToken.save();
};

export const addTokenToBL = async (
  token: string,
  type: string
): Promise<void> => {
  const payload = jwt.verify(token, JWT.secret) as jwt.TokenBody;
  if (payload.type !== type) throw httpError(400, TOKEN_ERROR.invalid);
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
  const { token, payload } = user.generateJWT('activation');
  await upsertToken(token, payload);
  return token;
};

export const genAuthTokens = async (user: UserDoc): Promise<AuthTokens> => {
  const accessToken = user.generateJWT('access');
  const refreshToken = user.generateJWT('refresh');
  await saveToken(refreshToken.token, refreshToken.payload);
  return {
    accessToken: accessToken.token,
    refreshToken: refreshToken.token,
    rtExpDate: moment.unix(refreshToken.payload.exp).toDate()
  };
};

export const genResetToken = async (user: UserDoc): Promise<string> => {
  const { token, payload } = user.generateJWT('reset');
  await upsertToken(token, payload);
  return token;
};

export const deleteToken = async (
  token: string,
  type: string
): Promise<void> => {
  const deleted = await Token.deleteOne({ type, token });
  if (deleted.deletedCount === 0) throw httpError(404, TOKEN_ERROR.invalid);
};

// !NOT IMPLEMENTED YET
export const checkBlacklistedToken = async (token: string): Promise<void> => {
  const searchedToken = await Token.findOne({ token });
  if (searchedToken !== null) throw httpError(400, TOKEN_ERROR.invalid);
};
