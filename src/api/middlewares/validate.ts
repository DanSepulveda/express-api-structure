import joi from 'joi';
import type { Req, Res, Next } from '../common.interfaces';
import { getReqObject } from '../../utils/getReqObject';

const joiSchema = joi.object();

export interface JoiSchema {
  body?: typeof joiSchema;
  params?: typeof joiSchema;
  query?: typeof joiSchema;
}

const validate =
  (schema: JoiSchema) =>
  (req: Req, res: Res, next: Next): void => {
    const val = getReqObject(req, Object.keys(schema));
    const { error } = joi
      .compile(schema)
      .prefs({ abortEarly: false })
      .validate(val);

    if (error == null) {
      next();
    } else {
      res.status(400).json({
        success: false,
        errors: error.details.map((error) => {
          return {
            field: error?.context?.key,
            message: error.message.replace('"', "'").replace('"', "'")
          };
        })
      });
    }
  };

export default validate;
