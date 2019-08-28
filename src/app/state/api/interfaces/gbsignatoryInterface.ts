import { ApiModel } from './index';

// so this is the interface for a single Grand Bargain Signatory response datas
export interface SingleDefGBSignatory {
  _id: string;
  pubName: string;
  orgType: string;
  name: string;
  regPubId: string;
  IATIOrgRef: string;
  suppInfoUrl: string;
  fiscalStart: string;
  fiscalEnd: string;
  firstPubDate: string;
  reportsToEU: string;
  reportsToFTS: string;
  reportsToFTSViaIATI: string;
}

// export interface ArrayDefGBSignatory {
//   data: Array<SingleDefGBSignatory>;
// }

interface GBSignatoryQuery {}

export default interface GBSignatoryResponseInterface
  extends ApiModel<GBSignatoryQuery, SingleDefGBSignatory> {}
