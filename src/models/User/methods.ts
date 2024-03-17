import { type userSchema } from '.';
import jwt from 'jsonwebtoken';
import { SECRET_OR_KEY } from '../../configs/constants';

const setMethods = (schema: typeof userSchema): void => {
  schema.methods.generateJWT = function (): string {
    return jwt.sign(
      {
        userId: this._id,
        names: this.basicData.names,
        surename: this.basicData.surename,
        username: this.sign.username
      },
      SECRET_OR_KEY
    );
  };
};

export default setMethods;
