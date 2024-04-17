import type { Req } from '@api/commonInterfaces';
import type { UserDoc } from '@components/user/interfaces';

type RequestWithUser = Req & { user: UserDoc };

function assertHasUser(req: Req): asserts req is RequestWithUser {
  if (!('user' in req)) {
    throw new Error('Request object without user found');
  }
}

export default assertHasUser;
