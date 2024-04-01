import type { User, UserDoc, UserModel } from './types';
import { Schema, model, type SchemaDefinition } from 'mongoose';
import setMethods from './model.methods';
import setStatics from './model.statics';

const schemaFields: SchemaDefinition<User> = {
  account: {
    email: { type: String, required: true, index: true },
    salt: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
    active: { type: Boolean, required: true, default: false }
  },
  basicData: {
    names: String,
    surename: String,
    lastname: String
  }
};

export const userSchema = new Schema<UserDoc>(schemaFields);

// export const userSchema = new Schema<UserDoc>({
//   account: {
//     email: { type: String, required: true, index: true },
//     salt: { type: String, required: true },
//     hashedPassword: { type: String, required: true },
//     verified: { type: Boolean, required: true, default: false },
//     active: { type: Boolean, required: true, default: false },
//     lala: String
//   },
//   basicData: {
//     names: String,
//     surename: String,
//     lastname: String,
//     lala: String
//   }
// });

setMethods(userSchema);
setStatics(userSchema);

export default model<UserDoc, UserModel>('user', userSchema);
