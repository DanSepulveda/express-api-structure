import type { Model, Document } from 'mongoose';
import type { TokenTypes } from '@api/commonInterfaces';

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
  generateJWT: (type: TokenTypes) => string;
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

export interface RecoveryData {
  password: string;
  confirmPassword: string;
}
