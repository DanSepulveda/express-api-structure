import express from 'express';
import type { ReqHandler } from '../../types';
import validate from '../../middlewares/validate';
import * as controller from './controller';
import * as validation from './validation';

const authRouter = express.Router();

authRouter
  .route('/login')
  .post(validate(validation.login), controller.login as ReqHandler);

authRouter.route('/logout').get(controller.logout as ReqHandler);

authRouter
  .route('/signup')
  .post(validate(validation.signup), controller.signup as ReqHandler)
  .get(
    validate(validation.verifyAccount),
    controller.verifyAccount as ReqHandler
  );

authRouter
  .route('/password')
  .post(
    validate(validation.forgotPassword),
    controller.forgotPassword as ReqHandler
  )
  .patch(controller.resetPassword as ReqHandler);

export default authRouter;
