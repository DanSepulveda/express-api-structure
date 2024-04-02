import joi from 'joi';
import type { Req, Res, Next } from '../types';

const joiSchema = joi.object();

interface Schema {
  body: typeof joiSchema;
}

const validate =
  (schema: Schema) =>
  (req: Req, res: Res, next: Next): void => {
    // TODO: change config to validate more than just req.body
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
