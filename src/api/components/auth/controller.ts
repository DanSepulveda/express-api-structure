import type { Req, Res, Next } from '../../types';
import type { SignupReq } from './types';
import * as authService from './service';
import * as emailService from '../email/service';

export const signup = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const data: SignupReq = req.body;
    const { token, ...response } = await authService.signup(data);
    await emailService.sendActivationLink(data.email, token);
    res.json({ ...response });
  } catch (err) {
    next(err);
  }
};

export const verifyAccount = async (
  req: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    const token: string = req.query.token?.toString() ?? '';
    const response = await authService.verifyAccout(token);
    res.json({ ...response });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { email, password } = req.body;
    const response = await authService.login({ email, password });
    res.json({ ...response });
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
  req: Req,
  res: Res,
  next: Next
): Promise<void> => {
  try {
    const { email } = req.body;
    const response = authService.recoveryPassword({ email });
    console.log(response);
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
