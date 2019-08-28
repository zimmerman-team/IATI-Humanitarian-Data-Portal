import { FacetsModel } from 'app/modules/signatory-progress/store/interface';

export interface DataPoint {
  x: string;
  y: number | null;
}

export interface specPubsItemModel {
  name: string;
  specPub: Array<FacetsModel | null>;
}
