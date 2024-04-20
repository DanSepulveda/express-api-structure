/* eslint-disable @typescript-eslint/return-await */
import type { Next, Req, Res } from '@api/commonInterfaces';
import type { UserDoc } from '@api/components/user/interfaces';
import createHttpError from 'http-errors';
import type { TokenBody } from 'jsonwebtoken';
import passport from 'passport';

const checkPermission =
  (
    req: Req,
    resolve: () => void,
    reject: (error: unknown) => void,
    permission: string
  ) =>
  async (
    err: Error,
    data: { user: UserDoc; token: TokenBody },
    info: string
  ) => {
    if (err !== null || data.user === null || Boolean(info)) {
      reject(createHttpError.Unauthorized());
    }
    if (data.token.type !== permission) {
      reject(createHttpError(400, 'token not valid'));
    }
    req.user = data.user;

    resolve();
  };

export const auth =
  (permission: string = '') =>
  async (req: Req, res: Res, next: Next) =>
    new Promise<void>((resolve, reject) => {
      passport.authenticate(
        'jwt',
        { session: false },
        checkPermission(req, resolve, reject, permission)
      )(req, res, next);
    })
      .then(() => {
        console.log('llego al then');
        next();
      })
      .catch((err) => {
        console.log('llego al catch');
        next(err);
      });

export default auth;
