import { Schema, model, Types } from 'mongoose';

export const tokenSchema = new Schema(
  {
    token: { type: String, required: true, index: true },
    userId: { type: Types.ObjectId, required: true, ref: 'user' },
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
