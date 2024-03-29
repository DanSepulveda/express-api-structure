import express from 'express';
import authRouter from './components/auth/routes';
import permissionRouter from './components/permission/routes';
import roleRouter from './components/role/routes';
import userRouter from './components/user/routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/permission', permissionRouter);
router.use('/role', roleRouter);
router.use('/users', userRouter);

export default router;
