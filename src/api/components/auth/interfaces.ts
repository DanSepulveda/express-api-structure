import type User from '../user/model';
export type { SignData, RecoveryData } from '../user/interfaces';

export interface BaseResponse {
  success: boolean;
  message: string;
}

export type LoginRes = Promise<InstanceType<typeof User>>;
