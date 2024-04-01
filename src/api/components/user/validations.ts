import joi from 'joi';
import validator from '../../middlewares/validate';
import type { Request, Response, NextFunction } from 'express';

export const signupValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const schema = joi.object({
    username: joi.string().email().trim().required().min(6),
    password: joi.string().trim().required().min(8)
  });

  validator(req, res, next, schema);
};
