import { HttpError } from 'http-errors';
import type { Req, Res, Next } from '@api/commonInterfaces';
import { JsonWebTokenError } from 'jsonwebtoken';
import { TOKEN_ERROR } from '@api/responseMessages';

const errorHandler = (
  err: HttpError | JsonWebTokenError,
  _: Req,
  res: Res,
  next: Next
): void => {
  let status: number = 500;
  let message: string = 'Something went wrong';
  if (err instanceof HttpError) {
    status = err.status;
    message = err.message;
  }

  if (err.message === TOKEN_ERROR.reuse || err instanceof JsonWebTokenError) {
    res.clearCookie('access');
    res.clearCookie('refresh');
  }
  res.status(status).json({ success: false, message });
  next();
};

export default errorHandler;
