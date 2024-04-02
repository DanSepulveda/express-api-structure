import type { userSchema } from './model';

const setStatics = (schema: typeof userSchema): void => {
  schema.static(
    'isRegistered',
    async function isRegistered(email: string): Promise<boolean> {
      const user = await this.findOne({ 'account.email': email }, '_id');
      return Boolean(user);
    }
  );
};

export default setStatics;
