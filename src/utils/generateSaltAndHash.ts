import crypto from 'crypto';

const generateSaltAndHash = (
  password: string
): { salt: string; hashedPassword: string } => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');

  return { salt, hashedPassword };
};

export default generateSaltAndHash;
