import type { Request, Response } from 'express';
import HttpError from 'http-errors';
import { userService } from './service';

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

export const login = async (): Promise<void> => {};
