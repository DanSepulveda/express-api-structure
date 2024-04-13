import type { Req, Res, Next } from '../../types';
import type { SignupReq } from './interfaces';
import * as authService from './service';
import * as emailService from '../email/service';
import * as tokenService from '../token/service';
import { controllerCatch } from '../../../utils/controllerCatch';
import { AUTH_SUCCESS } from '../responseMessages';

export const signup = controllerCatch(async (req: Req, res: Res) => {
  const data: SignupReq = req.body;
  await authService.signup(data);
  const token = await tokenService.generateActiveToken(data.email);
  await emailService.sendActivationLink(data.email, token);
  res.status(201).json({ sucess: true, message: AUTH_SUCCESS.signup });
});

export const sendVerificationEmail = controllerCatch(
  async (req: Req, res: Res) => {
    const email: string = req.body.email;
    await authService.validateActiveToken(email);
    const token = await tokenService.generateActiveToken(email);
    await emailService.sendActivationLink(email, token);
    res
      .status(200)
      .json({ success: true, message: AUTH_SUCCESS.sendVerifyToken });
  }
);

export const verifyAccount = controllerCatch(async (req: Req, res: Res) => {
  const token: string = req.query.token?.toString() ?? '';
  const response = await authService.verifyAccout(token);
  res.json({ ...response });
});

export const login = controllerCatch(async (req: Req, res: Res) => {
  const data: SignupReq = req.body;
  const response = await authService.login(data);
  res.json({ ...response });
});

export const logout = async (_: Req, res: Res, next: Next): Promise<void> => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = controllerCatch(async (req: Req, res: Res) => {
  const email: string = req.body.email;
  const response = authService.recoveryPassword(email);
  console.log(response);
  res.json({ success: true });
});

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
