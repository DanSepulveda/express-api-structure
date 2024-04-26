import type { Req, Res } from '@api/commonInterfaces';
import type { SignData } from './interfaces';
import { AUTH_SUCCESS } from '@api/responseMessages';
import controllerCatch from '@utils/controllerCatch';
import assertHasUser from '@utils/assertHasUser';
import * as authService from './service';
import * as emailService from '@components/email/service';
import * as tokenService from '@components/token/service';
import * as userService from '@components/user/service';

export const signup = controllerCatch(async (req: Req, res: Res) => {
  const data: SignData = req.body;
  const user = await userService.signupWithEmailAndPassword(data);
  const token = await tokenService.genActivationToken(user);
  await emailService.sendActivationLink(data.email, token);
  return res.status(201).json({ sucess: true, message: AUTH_SUCCESS.signup });
});

export const sendVerificationEmail = controllerCatch(
  async (req: Req, res: Res) => {
    const email: string = req.body.email;
    const user = await userService.checkVerifiedStatus(email);
    const token = await tokenService.genActivationToken(user);
    await emailService.sendActivationLink(email, token);
    res
      .status(200)
      .json({ success: true, message: AUTH_SUCCESS.sendVerificationEmail });
  }
);

export const verifyAccount = controllerCatch(async (req: Req, res: Res) => {
  assertHasUser(req);
  const user = req.user;
  await userService.checkVerifiedStatus(user);
  const token = req.headers.authorization?.split(' ')[1] ?? '';
  await Promise.all([
    tokenService.deleteToken(token, 'activation'),
    authService.verifyAccout(user.account.email)
  ]);
  res.status(200).json({ success: true, message: AUTH_SUCCESS.verification });
});

// TODO: filter user data in response
export const login = controllerCatch(async (req: Req, res: Res) => {
  const { email, password }: SignData = req.body;
  const user = await authService.checkAccountStatus(email);
  await authService.loginWithEmailAndPassword(user, password);
  const { accessToken, refreshToken, rtExpDate } =
    await tokenService.genAuthTokens(user);

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: rtExpDate
  });

  res.status(200).json({
    success: true,
    message: AUTH_SUCCESS.login,
    token: accessToken,
    user
  });
});

export const logout = controllerCatch(async (req: Req, res: Res) => {
  const accessToken = req.headers.authorization?.split(' ')[1] ?? '';
  const refreshToken: string = req.cookies.jwt;
  await Promise.all([
    tokenService.addTokenToBL(accessToken, 'access'),
    tokenService.deleteToken(refreshToken, 'refresh')
  ]);
  res.clearCookie('jwt');
  res.json({ success: true, message: AUTH_SUCCESS.logout });
});

export const forgotPassword = controllerCatch(async (req: Req, res: Res) => {
  const email: string = req.body.email;
  const user = await authService.checkAccountStatus(email);
  const token = await tokenService.genResetToken(user);
  await emailService.sendResetLink(email, token);
  res.status(200).json({ success: true, message: AUTH_SUCCESS.sendResetEmail });
});

export const resetPassword = controllerCatch(async (req: Req, res: Res) => {
  assertHasUser(req);
  const token = req.headers.authorization?.split(' ')[1] ?? '';
  await tokenService.deleteToken(token, 'reset');
  const user = req.user;
  const password: string = req.body.password;
  await authService.resetPassword(user, password);
  res.status(200).json({ success: true, message: AUTH_SUCCESS.resetPassword });
});
