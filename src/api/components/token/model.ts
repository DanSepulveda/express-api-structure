import { Schema, model } from 'mongoose';
import type { TokenDoc, TokenModel } from './interfaces';

export const tokenSchema = new Schema<TokenDoc>(
  {
    token: { type: String, required: true, index: true },
    email: { type: String, required: true },
    expires: { type: Date, required: true },
    type: {
      type: String,
      required: true,
      enum: ['access', 'refresh', 'recovery', 'activation']
    },
    blacklisted: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
);

const Token = model<TokenDoc, TokenModel>('token', tokenSchema);

export default Token;
