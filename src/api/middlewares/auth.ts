import passport from 'passport';
import User from '@components/user/model';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT } from '@config/app';

const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT.secret
  },
  (payload, done) => {
    // TODO: includes permission validation
    User.findById(payload.userId)
      .then((res) => {
        if (res == null) {
          done(null, false);
        } else {
          done(null, res);
        }
      })
      .catch((error) => {
        done(error, false);
      });
  }
);

passport.use(jwtStrategy);

const auth = passport.authenticate('jwt', { session: false });

export default auth;
