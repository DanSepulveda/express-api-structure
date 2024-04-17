import type { Document, Model } from 'mongoose';
import type { TokenTypes } from '@api/commonInterfaces';

declare module 'jsonwebtoken' {
  export interface TokenBody extends JwtPayload {
    userId: string;
    email: string;
    type: string;
    iat: number;
    exp: number;
  }
}

interface TokenSchema {
  token: string;
  email: string;
  expires: Date;
  type: TokenTypes;
  blacklisted: boolean;
}

export interface TokenDocument extends Document, TokenSchema {
  isExpired: () => boolean;
}

export interface TokenModel extends Model<TokenDocument> {}

export interface AuthTokens {
  authToken: string;
  refreshToken: string;
}
