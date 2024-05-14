import { Strategy } from 'passport-jwt';
import { JWT } from './app';
import User from '@api/components/user/model';
import type { Req } from '@api/commonInterfaces';

function cookieExtractor(req: Req): string {
  let jwt = null;

  if (req?.cookies !== null) {
    jwt = req.cookies.access;
  }

  return jwt;
}

const jwtStrategy = new Strategy(
  {
    jwtFromRequest: cookieExtractor,
    secretOrKey: JWT.secret
  },
  (payload, done) => {
    User.findById(payload.userId)
      .then((user) => {
        if (user == null) {
          done(null, false);
        } else {
          done(null, { user, token: payload });
        }
      })
      .catch((error) => {
        done(error, false);
      });
  }
);

export default jwtStrategy;
