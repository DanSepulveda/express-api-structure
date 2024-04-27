import passport from 'passport';
import httpError from 'http-errors';
import { TOKEN_ERROR } from '@api/responseMessages';
import type { TokenBody } from 'jsonwebtoken';
import type { Next, Req, Res } from '@api/commonInterfaces';
import type { UserDoc } from '@api/components/user/interfaces';

const checkPermission =
  (
    req: Req,
    resolve: () => void,
    reject: (error: unknown) => void,
    permission: string
  ) =>
  async (
    err: Error,
    data: { user: UserDoc; token: TokenBody } | false,
    info: string
  ) => {
    if (err !== null || data === false || Boolean(info)) {
      reject(httpError.Unauthorized());
      return;
    }

    // TODO: check user permission and validate with auth middleware permission
    if (data.token.type !== permission) {
      reject(httpError(400, TOKEN_ERROR.invalid));
      return;
    }

    req.user = data.user;
    resolve();
  };

export const auth =
  (permission: string) => async (req: Req, res: Res, next: Next) => {
    new Promise<void>((resolve, reject) => {
      passport.authenticate(
        'jwt',
        { session: false },
        checkPermission(req, resolve, reject, permission)
      )(req, res, next);
    })
      .then(() => {
        next();
      })
      .catch((err) => {
        next(err);
      });
  };

export default auth;
