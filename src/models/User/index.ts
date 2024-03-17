import { Schema, model } from 'mongoose';
import setMethods from './methods';

interface IUser {
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

export const userSchema = new Schema<IUser>({
  sign: {
    username: { type: String, required: true, index: true },
    salt: { type: String, required: true },
    hashedPassword: { type: String, required: true }
  },
  basicData: {
    names: { type: String, required: true },
    surename: { type: String, required: true },
    lastname: { type: String, required: true }
  }
});

setMethods(userSchema);

const User = model('user', userSchema);

export default User;
