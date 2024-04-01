import type { Req, Res, Next } from '../../types';
import * as authService from './service';

export const signup = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { email, password } = req.body;
    const response = await authService.signup({ email, password });
    res.json({ ...response });
  } catch (err) {
    next(err);
  }
};

export const verifyAccount = async (
  _: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const login = async (_: Req, res: Res, next: Next): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const logout = async (_: Req, res: Res, next: Next): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (
  _: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (
  _: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const sendVerificationEmail = async (
  _: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

// Promise<Response<unknown, Record<string, unknown>>>
