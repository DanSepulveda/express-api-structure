import express from 'express';
import { createUser } from './controller';
import { signupValidator } from './validations';

const userRouter = express.Router();

userRouter.route('/').post(signupValidator, createUser);

export default userRouter;
