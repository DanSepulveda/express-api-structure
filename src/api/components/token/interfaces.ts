import { type JwtPayload } from 'jsonwebtoken';
import type { Document, Model } from 'mongoose';

interface TokenSchema {
  token: string;
  email: string;
  expires: Date;
  type: 'access' | 'refresh' | 'recovery' | 'activation';
  blacklisted: boolean;
}

export interface TokenDoc extends Document, TokenSchema {}

export interface TokenModel extends Model<TokenDoc> {}

export interface AuthTokens {
  authToken: string;
  refreshToken: string;
}

declare module 'jsonwebtoken' {
  export interface TokenBody extends JwtPayload {
    userId: string;
    email: string;
    iat: number;
    exp: number;
  }
}
