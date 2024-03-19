import { type Model } from 'mongoose';

export interface User {
  sign: {
    username: string;
    salt: string;
    hashedPassword: string;
  };
  basicData: {
    names: string;
    surename: string;
    lastname: string;
  };
}

export interface UserDoc extends User, Document {
  generateJWT: () => string;
}

export interface UserModel extends Model<UserDoc> {
  isRegistered: (username: string) => boolean;
}
