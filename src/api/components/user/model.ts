import type { UserDoc, UserModel } from './types';
import { Schema, model } from 'mongoose';
import setMethods from './model.methods';
import setStatics from './model.statics';

export const userSchema = new Schema<UserDoc>({
  account: {
    email: { type: String, required: true, index: true },
    salt: { type: String, required: true },
    password: { type: String, required: true },
    activeCode: { type: String, requires: true },
    verified: { type: Boolean, required: true, default: false },
    active: { type: Boolean, required: true, default: true }
  },
  basicData: {
    names: String,
    surename: String,
    lastname: String
  }
});

setMethods(userSchema);
setStatics(userSchema);

export default model<UserDoc, UserModel>('user', userSchema);
