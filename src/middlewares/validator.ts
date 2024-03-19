import { type Request, type Response, type NextFunction } from 'express';
import joi from 'joi';

const joiSchema = joi.object();

export const validator = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: typeof joiSchema
): void => {
  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error == null) {
    next();
  } else {
    res.status(400).json({
      success: false,
      errors: validation.error.details.map((error) => {
        return {
          field: error?.context?.key,
          message: error.message.replace('"', '{').replace('"', '}')
        };
      })
    });
  }
};
