import jwt from 'jsonwebtoken';
import type { userSchema } from './model';
import { SECRET_OR_KEY } from '../../../config/constants';
import crypto from 'crypto';

const setMethods = (schema: typeof userSchema): void => {
  schema.method('generateJWT', function generateJWT(): string {
    return jwt.sign(
      {
        userId: this._id,
        names: this.basicData.names,
        surename: this.basicData.surename,
        email: this.account.email
      },
      SECRET_OR_KEY
    );
  });
  schema.method(
    'comparePassword',
    function comparePassword(password: string): boolean {
      const hash = crypto
        .pbkdf2Sync(password, this.account.salt, 10000, 512, 'sha512')
        .toString('hex');
      return this.account.hashedPassword === hash;
    }
  );
};

export default setMethods;
