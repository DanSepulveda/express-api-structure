import type { Req, Res } from '../../types';
import type { RecoveryData, SignData } from './interfaces';
import { AUTH_SUCCESS } from '../responseMessages';
import { controllerCatch } from '../../../utils/controllerCatch';
import * as authService from './service';
import * as emailService from '../email/service';
import * as tokenService from '../token/service';
import * as userService from '../user/service';

export const signup = controllerCatch(async (req: Req, res: Res) => {
  const data: SignData = req.body;
  await userService.signupWithEmailAndPassword(data);
  const token = await tokenService.genActivationToken(data.email);
  await emailService.sendActivationLink(data.email, token);
  return res.status(201).json({ sucess: true, message: AUTH_SUCCESS.signup });
});

export const sendVerificationEmail = controllerCatch(
  async (req: Req, res: Res) => {
    const email: string = req.body.email;
    await userService.checkVerifiedStatus(email);
    const token = await tokenService.genActivationToken(email);
    await emailService.sendActivationLink(email, token);
    res
      .status(200)
      .json({ success: true, message: AUTH_SUCCESS.sendVerificationEmail });
  }
);

export const verifyAccount = controllerCatch(async (req: Req, res: Res) => {
  const token: string = req.query.token?.toString() ?? '';
  const email = await tokenService.deleteActivationToken(token);
  await authService.verifyAccout(email);
  res.status(200).json({ success: true, message: AUTH_SUCCESS.verification });
});

export const login = controllerCatch(async (req: Req, res: Res) => {
  const data: SignData = req.body;
  const user = await authService.login(data);
  const tokens = await tokenService.genAuthTokens(user);
  res.status(200).json({
    success: true,
    tokens,
    user,
    message: AUTH_SUCCESS.login
  });
});

export const logout = controllerCatch(async (req: Req, res: Res) => {
  const token = req.headers.authorization?.split(' ')[1] ?? '';
  await tokenService.addTokenToBL(token);
  res.json({ success: true, message: AUTH_SUCCESS.logout });
});

export const forgotPassword = controllerCatch(async (req: Req, res: Res) => {
  const email: string = req.body.email;
  const user = await authService.recoveryPassword(email);
  const token = await tokenService.genRecoveryToken(user);
  await emailService.sendRecoveryLink(user.account.email, token);
  res.json({ success: true, message: AUTH_SUCCESS.sendRecoveryEmail });
});

export const resetPassword = controllerCatch(async (req: Req, res: Res) => {
  const data: RecoveryData = req.body;
  await authService.resetPassword(data);
  res.json({ success: true, message: AUTH_SUCCESS.resetPassword });
});
