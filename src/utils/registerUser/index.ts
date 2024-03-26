import crypto from 'crypto';

export const generateSalt = (): string => {
  return crypto.randomBytes(16).toString('hex');
};

export const hash = (salt: string, password: string): string => {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');
};
