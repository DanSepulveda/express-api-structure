import type User from './model';
import type { userSchema } from './model';

const setStatics = (schema: typeof userSchema): void => {
  schema.static(
    'findByEmail',
    async function findByEmail(
      email: string,
      fields: string = '_id'
    ): Promise<typeof User> {
      const user = await this.findOne({ 'account.email': email }, fields);
      return user ?? null;
    }
  );
};

export default setStatics;
