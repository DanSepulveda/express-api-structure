import { model, Schema } from 'mongoose';
import type { TokenDocument, TokenModel } from './interfaces';
import { tokenTypes } from '../../commonInterfaces';

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

const Token = model<TokenDocument, TokenModel>('token', tokenSchema);

export default Token;
