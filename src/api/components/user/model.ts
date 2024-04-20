import { Schema, model } from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { JWT } from '@config/app';
import type { UserDoc, UserDocument, UserModel } from './interfaces';
import type { TokenTypes } from '@api/commonInterfaces';

const userSchema = new Schema<UserDocument>({
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

// Pre
userSchema.pre('validate', function () {
  if (this.isModified('account.password')) {
    const { password, salt } = this.account;
    this.account.password = crypto
      .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
      .toString('hex');
  }
});

// STATICS
userSchema.static(
  'findByEmail',
  async function findByEmail(
    email: string,
    fields: string = ''
  ): Promise<UserDoc> {
    const user = await this.findOne({ 'account.email': email }, fields);
    return user ?? null;
  }
);

// METHODS
userSchema.method('generateJWT', function generateJWT(type: TokenTypes) {
  return jwt.sign(
    {
      userId: this._id,
      email: this.account.email,
      type
    },
    JWT.secret,
    {
      expiresIn: JWT.expiration[type]
    }
  );
});

userSchema.method('hashPWD', function hashPWD() {
  const password: string = this.account.password;
  this.account.password = crypto
    .pbkdf2Sync(password, this.account.salt, 10000, 512, 'sha512')
    .toString('hex');
});

userSchema.method('comparePWD', function comparePWD(password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.account.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.account.password === hash;
});

const User = model<UserDocument, UserModel>('user', userSchema);

export default User;
