import { Router } from 'express';
import type { ReqHandler } from '../types';
import validate from '../middlewares/validate';
import * as controller from '../components/auth/controller';
import * as validation from '../components/auth/validation';

const authRouter = Router();

authRouter.post(
  '/signup',
  validate(validation.signup),
  controller.signup as ReqHandler
);

authRouter.get(
  '/verify-account',
  validate(validation.verifyAccount),
  controller.verifyAccount as ReqHandler
);

authRouter.post(
  '/login',
  validate(validation.login),
  controller.login as ReqHandler
);

// !pending
authRouter.post('/logout', controller.logout as ReqHandler);

// !pending
authRouter.post(
  '/forgot-password',
  validate(validation.forgotPassword),
  controller.forgotPassword as ReqHandler
);

// !pending
authRouter.post('/reset-password', controller.resetPassword as ReqHandler);

export default authRouter;
