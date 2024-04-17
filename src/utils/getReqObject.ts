import type { CommonObject, Req } from '../api/common.interfaces';

export const getReqObject = (req: Req, keys: string[]): CommonObject => {
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
