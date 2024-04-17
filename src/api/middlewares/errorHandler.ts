import type { HttpError } from 'http-errors';
import type { Req, Res, Next } from '../common.interfaces';

const errorHandler = (err: HttpError, _: Req, res: Res, next: Next): void => {
  const status: number = err.status ?? 500;
  const message: string = err.message ?? 'Something went wrong';
  res.status(status).json({ success: false, message });
  next();
};

export default errorHandler;
