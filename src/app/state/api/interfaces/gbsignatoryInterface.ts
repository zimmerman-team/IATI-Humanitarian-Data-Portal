import { ApiModel } from './index';

// so this is the interface for a single Grand Bargain Signatory response datas
interface SingleDefGBSignatory {
  Publisher: string;
  Signatory: string;
  OrganisationType: string;
  FirstPublished: string;
  RegistryPubID: number;
  IATIOrgRef: string;
  SuppInfoURL: string;
  ReportsToFTS: string;
  ReportsToFTSViaIATI: string;
  ReportsToEU: string;
  FiscalYearStart: string;
  FiscalYearEnd: string;
}

interface GBSignatoryQuery {}

export default interface GBSignatoryResponseInterface
  extends ApiModel<GBSignatoryQuery, SingleDefGBSignatory[]> {}
