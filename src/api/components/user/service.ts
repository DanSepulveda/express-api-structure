import User from './model';
import createHttpError from 'http-errors';
import { generateSalt, hash } from '@utils/registerUSer';

interface UserData {
  username: string;
  password: string;
}

export const userService = {
  signup: async (
    user: UserData
  ): Promise<{ success: boolean; message: string; token: string | null }> => {
    const { username, password } = user;
    const isRegistered = await Promise.resolve(User.isRegistered(username));
    if (isRegistered) throw createHttpError(400, 'Username already exists');
    const salt = generateSalt();
    const hashedPassword = hash(salt, password);
    const newUser = new User({
      sign: { username, hashedPassword, salt }
    });
    await newUser.save();
    const token = newUser.generateJWT();

    return {
      success: true,
      message: 'User created successfully',
      token
    };
  }
};
