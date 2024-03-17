import { type Request, type Response } from 'express';

export const createUser = (req: Request, res: Response): void => {
  console.log(req.body);
  res.send('Create user');
};

export const getUsers = (req: Request, res: Response): void => {
  console.log(req.body);
  res.send('Get users');
};
