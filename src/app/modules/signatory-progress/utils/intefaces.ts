import { OrgRefItem } from 'app/modules/signatory-progress/store/interface';

export interface DataPoint {
  x: string;
  y: number | null;
}

export interface SpecPubsItemModel {
  name: string;
  key: string;
  specPub: Array<OrgRefItem> | null;
}

export interface SigItemModel {
  'orgs_[1900-01-01_TO_2017-06-30]': {
    sigCount: number | null;
  };
  'orgs_[1900-01-01_TO_2018-05-01]': {
    sigCount: number | null;
  };
  'orgs_[1900-01-01_TO_2019-05-31]': {
    sigCount: number | null;
  };
  'orgs_[1900-01-01_TO_NOW]': {
    sigCount: number | null;
  };
}
