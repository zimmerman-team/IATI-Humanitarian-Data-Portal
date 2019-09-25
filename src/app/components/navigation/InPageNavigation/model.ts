import { ListModel } from 'app/components/datadisplay/Lists/model';

export type InPageNavModel = {
  lists: ListModel[];
  dontShow?: boolean;
};

export type LocationModel = {
  label: string;
  url: string;
};
