import { Schema, model } from 'mongoose';
import setMethods from './instanceMethods';
import setStatics from './modelMethods';
import { type User, type UserDoc, type UserModel } from './types';

const schemaFields: Record<keyof User, unknown> = {
  sign: {
    username: { type: String, required: true, index: true },
    salt: { type: String, required: true },
    hashedPassword: { type: String, required: true }
  },
  basicData: {
    names: String,
    surename: String,
    lastname: String
  }
};

export const userSchema = new Schema(schemaFields);

setMethods(userSchema);
setStatics(userSchema);

export default model<UserDoc, UserModel>('user', userSchema);
