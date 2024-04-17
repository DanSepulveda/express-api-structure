import type { Next, Req, Res } from '@api/commonInterfaces';

const controllerCatch =
  (fn: (req: Req, res: Res, next: Next) => unknown) =>
  async (req: Req, res: Res, next: Next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };

export default controllerCatch;
