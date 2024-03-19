import { type Request, type Response } from 'express';
import { userService } from '../services/userService';
import HttpError from 'http-errors';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, password } = req.body;
    const { success, message, token } = await userService.signup({
      username,
      password
    });
    res.json({ success, message, token });
  } catch (error: unknown) {
    if (error instanceof HttpError.HttpError) {
      const { message, status } = error;
      res.status(status).json({ success: false, error: message });
    }
  }
};
