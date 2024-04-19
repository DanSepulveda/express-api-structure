import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT } from './app';
import User from '@api/components/user/model';

const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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
