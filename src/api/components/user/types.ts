import type { Model, Document } from 'mongoose';
import type UserDocument from './model';

interface UserAccount {
  email: string;
  salt: string;
  password: string;
  verified: boolean;
  active: boolean;
}

interface UserBasicData {
  names: string;
  surename: string;
  lastname: string;
}

export interface User {
  account: UserAccount;
  basicData: UserBasicData;
}

export interface UserDoc extends Document, User {
  generateJWT: () => string;
  hashPWD: () => void;
  comparePWD: (password: string) => boolean;
}

export interface UserModel extends Model<UserDoc> {
  findByEmail: (
    email: string,
    fields?: string
  ) => InstanceType<typeof UserDocument>;
}
