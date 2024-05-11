import type { HttpError } from 'http-errors';
import type { Req, Res, Next } from '@api/commonInterfaces';
import { TOKEN_ERROR } from '@api/responseMessages';

const errorHandler = (err: HttpError, _: Req, res: Res, next: Next): void => {
  const status: number = err.status ?? 500;
  const message: string = err.message ?? 'Something went wrong';

  if (err.message === TOKEN_ERROR.reuse) {
    res.clearCookie('access');
    res.clearCookie('refresh');
  }
  res.status(status).json({ success: false, message });
  next();
};

export default errorHandler;
