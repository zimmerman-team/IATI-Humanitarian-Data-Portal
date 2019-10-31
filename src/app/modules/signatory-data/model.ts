import { TableModuleModel } from 'app/components/datadisplay/Table/model';

type HumanitarianCheckup = {
  primary: boolean | string;
  secondary: boolean | string;
  tertiary: boolean | string;
  quaternary: boolean | string;
};

type Signatory = {
  publishinOrganisation: string;
  gbSignatory: string;
  organisationType: string;
  iatiVersion: number;
  humanitarianData: HumanitarianCheckup;
};

export type SignatoryDataModel = {
  title: string;
  loading: boolean;
  sigTable: TableModuleModel;
  description: string;
};

export interface SignatoryDataModule {
  tableOptions: {
    filterLists: string[][];
    sortCol: string;
    sortDir: string;
    searchTerm: string;
  };
}
