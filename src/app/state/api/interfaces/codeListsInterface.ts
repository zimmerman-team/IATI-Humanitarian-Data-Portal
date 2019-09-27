import { ApiModel } from './index';

export interface StatusItemInterface {
  code: string;
  name: string;
}

export interface StatusListApiInterface
  extends ApiModel<any, StatusItemInterface[]> {}
