import type {
  Model,
  Document,
  SchemaDefinition,
  SchemaDefinitionProperty
} from 'mongoose';

interface UserAccount {
  email: SchemaDefinitionProperty<string>;
  salt: SchemaDefinitionProperty<string>;
  hashedPassword: SchemaDefinitionProperty<string>;
  verified: SchemaDefinitionProperty<boolean>;
  active: SchemaDefinitionProperty<boolean>;
}

interface UserBasicData {
  names: SchemaDefinitionProperty<string>;
  surename: SchemaDefinitionProperty<string>;
  lastname: SchemaDefinitionProperty<string>;
}

export interface User {
  account: SchemaDefinition<UserAccount>;
  basicData: SchemaDefinition<UserBasicData>;
}
// export interface User {
//   account: Record<keyof UserAccount, UserAccount[keyof UserAccount]>;
//   basicData: Record<keyof UserBasicData, unknown>;
// }

export interface UserDoc extends User, Document {
  generateJWT: () => string;
}

export interface UserModel extends Model<UserDoc> {
  isRegistered: (username: string) => boolean;
}
