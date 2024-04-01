import joi from 'joi';
import type { Req, Res, Next } from '../types';

const joiSchema = joi.object();

const validate = (
  req: Req,
  res: Res,
  next: Next,
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

interface SchemaLala {
  body: typeof joiSchema;
  params?: typeof joiSchema;
}

export const validatev2 =
  (schema: SchemaLala) =>
  (req: Req, res: Res, next: Next): void => {
    const validation = schema.body.validate(req.body, {
      abortEarly: false
    });

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

export default validate;
