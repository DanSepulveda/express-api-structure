import { type userSchema } from '.';

const setStatics = (schema: typeof userSchema): void => {
  schema.statics.isRegistered = async function (
    username: string
  ): Promise<boolean> {
    const user = await this.findOne({ 'sign.username': username }, '_id');
    return Boolean(user);
  };
};

export default setStatics;
