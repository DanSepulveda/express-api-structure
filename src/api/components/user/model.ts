import crypto from 'crypto';
import { Schema, model } from 'mongoose';
import type { UserDoc, UserModel } from './interfaces';
import setMethods from './model.methods';
import setStatics from './model.statics';

export const userSchema = new Schema<UserDoc>({
  account: {
    email: { type: String, required: true, index: true, lowercase: true },
    salt: {
      type: String,
      required: true,
      default: crypto.randomBytes(16).toString('hex')
    },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
    active: { type: Boolean, required: true, default: true }
  },
  basicData: {
    names: String,
    surename: String,
    lastname: String
  }
});

userSchema.pre('validate', function () {
  if (this.isModified('account.password')) {
    const { password, salt } = this.account;
    this.account.password = crypto
      .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
      .toString('hex');
  }
});

setMethods(userSchema);
setStatics(userSchema);

const User = model<UserDoc, UserModel>('user', userSchema);

export default User;
