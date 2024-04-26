import joi from 'joi';
import type { Req, Res, Next, CommonObject } from '@api/commonInterfaces';

export interface JoiSchema {
  body?: joi.ObjectSchema;
  params?: joi.ObjectSchema;
  query?: joi.ObjectSchema;
}

const getReqObject = (req: Req, keys: string[]): CommonObject => {
  return keys.reduce((obj: CommonObject, key) => {
    if (
      Object.keys(req).includes(key) &&
      (key === 'body' || key === 'params' || key === 'query')
    ) {
      obj[key] = req[key];
    }
    return obj;
  }, {});
};

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
        // TODO: handle error with custom messages
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
