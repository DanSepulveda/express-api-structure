import express from 'express';
import type { ReqHandler } from '../../types';
import * as controller from './controller';
import { validatev2 } from '../../middlewares/validate';
import * as validation from './validation';
// import validate from '../../middlewares/validator';

const authRouter = express.Router();

authRouter.route('/login').post(controller.login as ReqHandler);
authRouter.route('/logout').get(controller.logout as ReqHandler);

authRouter
  .route('/signup')
  .post(validatev2(validation.signup), controller.signup as ReqHandler)
  .get(controller.verifyAccount as ReqHandler);

authRouter
  .route('/password')
  .post(controller.forgotPassword as ReqHandler)
  .patch(controller.resetPassword as ReqHandler);

export default authRouter;
