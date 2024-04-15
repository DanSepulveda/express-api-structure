import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import type { userSchema } from './model';
import { JWT } from '../../../config/constants';

const setMethods = (schema: typeof userSchema): void => {
  schema.method(
    'generateJWT',
    function generateJWT(type: 'auth' | 'refresh'): string {
      return jwt.sign(
        {
          userId: this._id,
          names: this.basicData.names,
          surename: this.basicData.surename,
          email: this.account.email
        },
        JWT.secret,
        {
          expiresIn: JWT.expiration[type]
        }
      );
    }
  );
  schema.method('hashPWD', function hashPWD(): void {
    const password: string = this.account.password;
    this.account.password = crypto
      .pbkdf2Sync(password, this.account.salt, 10000, 512, 'sha512')
      .toString('hex');
  });
  schema.method('comparePWD', function comparePWD(password: string): boolean {
    const hash = crypto
      .pbkdf2Sync(password, this.account.salt, 10000, 512, 'sha512')
      .toString('hex');
    return this.account.password === hash;
  });
  schema.method('generateRecoveryToken', function (): string {
    return '';
  });
};

export default setMethods;
