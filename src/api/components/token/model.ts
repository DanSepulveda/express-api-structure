import { Schema, model } from 'mongoose';

export const tokenSchema = new Schema(
  {
    token: { type: String, required: true, index: true },
    email: { type: String, required: true },
    expires: { type: Date, required: true },
    type: {
      type: String,
      required: true,
      enum: ['access', 'refresh', 'recovery', 'activation']
    }
  },
  { timestamps: true }
);

const Token = model('token', tokenSchema);

export default Token;
