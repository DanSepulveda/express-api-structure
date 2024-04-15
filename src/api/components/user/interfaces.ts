import type { Model, Document } from 'mongoose';

export interface User {
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

export interface UserDoc extends Document, User {
  generateJWT: (type: 'auth' | 'refresh' | 'recovery') => string;
  hashPWD: () => void;
  comparePWD: (password: string) => boolean;
}

export interface UserModel extends Model<UserDoc> {
  findByEmail: (email: string, fields?: string) => InstanceType<UserModel>;
}

export interface SignData {
  email: string;
  password: string;
}

export interface RecoveryData {
  email: string;
  password: string;
  confirmPassword: string;
}
