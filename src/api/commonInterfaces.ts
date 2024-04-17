export type {
  Request as Req,
  Response as Res,
  NextFunction as Next,
  RequestHandler as ReqHandler
} from 'express';

export const tokenTypes = ['auth', 'refresh', 'reset'] as const;
export type TokenTypes = (typeof tokenTypes)[number];

export type CommonObject = Record<string, unknown>;
