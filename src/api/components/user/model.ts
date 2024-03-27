import type { User, UserDoc, UserModel } from './types';
import { Schema, model } from 'mongoose';
import setMethods from './model.methods';
import setStatics from './model.statics';

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
