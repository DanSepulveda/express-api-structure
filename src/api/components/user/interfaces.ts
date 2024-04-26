import type { Model, Document } from 'mongoose';
import type { TokenTypes } from '@api/commonInterfaces';
import type { TokenBody } from 'jsonwebtoken';

interface UserSchema {
  account: {
    email: string;
    salt: string;
    password: string;
    verified: boolean;
    active: boolean;
  };
  basicData: {
    names: string;
    surename: string;
    lastname: string;
  };
}

export interface UserDocument extends Document, UserSchema {
  generateJWT: (type: TokenTypes) => { token: string; payload: TokenBody };
  hashPWD: () => void;
  comparePWD: (password: string) => boolean;
}

export interface UserModel extends Model<UserDocument> {
  findByEmail: (
    email: string,
    fields?: string
  ) => Promise<InstanceType<UserModel>>;
}

export type UserDoc = InstanceType<UserModel>;

export interface SignData {
  email: string;
  password: string;
}
