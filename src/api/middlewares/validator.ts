import joi from 'joi';
import type { Request, Response, NextFunction } from 'express';

const joiSchema = joi.object();

const validator = (
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

export default validator;
