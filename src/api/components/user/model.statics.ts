import type { userSchema } from './model';

const setStatics = (schema: typeof userSchema): void => {
  schema.statics.isRegistered = async function (
    email: string
  ): Promise<boolean> {
    const user = await this.findOne({ 'sign.email': email }, '_id');
    return Boolean(user);
  };
};

export default setStatics;
