import { Schema, model } from 'mongoose';
import type { TokenDocument, TokenModel } from './interfaces';
import { tokenTypes } from '../../commonInterfaces';
import moment from 'moment';

export const tokenSchema = new Schema<TokenDocument>(
  {
    token: { type: String, required: true, index: true },
    email: { type: String, required: true },
    expires: { type: Date, required: true },
    type: {
      type: String,
      required: true,
      enum: tokenTypes
    },
    blacklisted: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
);

tokenSchema.method('isExpired', function isExpired() {
  const actualDate = moment();
  const expirationDate = moment(this.expires);
  return expirationDate.diff(actualDate) < 0;
});

const Token = model<TokenDocument, TokenModel>('token', tokenSchema);

export default Token;
