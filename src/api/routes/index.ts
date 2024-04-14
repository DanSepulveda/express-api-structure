import express from 'express';
import authRouter from './auth.routes';
import permissionRouter from './permission.routes';
import roleRouter from './role.routes';
import userRouter from './user.routes';
import swaggerRouter from './swagger.routes';

const router = express.Router();

router.use('/api-docs', swaggerRouter);
router.use('/auth', authRouter);
router.use('/permission', permissionRouter);
router.use('/role', roleRouter);
router.use('/users', userRouter);

export default router;
