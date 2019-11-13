import { ApiModel } from './index';

// so this is the interface for a single Grand Bargain Signatory response datas
export interface SignatoryProgress {
  _id: string;
  providingGranular202DataJune2017: string;
  providingGranular202DataMay2018: string;
  providingGranular202DataMay2019: string;
  publishingHumanitarianActivitiesJune2017: string;
  publishingHumanitarianActivitiesMay2018: string;
  publishingHumanitarianActivitiesMay2019: string;
  publishingOpenDataIATIJune2017: string;
  publishingOpenDataIATIMay2018: string;
  publishingOpenDataIATIMay2019: string;
  totalSigJune2017: string;
  totalSigMay2018: string;
  totalSigMay2019: string;
  using202OrLaterJune2017: string;
  using202OrLaterMay2018: string;
  using202OrLaterMay2019: string;
}

// export interface ArrayDefGBSignatory {
//   data: Array<SingleDefGBSignatory>;
// }

interface GBSignatoryQuery {}

export default interface SignatoryPrgoressResponseInterface
  extends ApiModel<GBSignatoryQuery, SignatoryProgress> {}
