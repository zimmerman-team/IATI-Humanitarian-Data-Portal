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
  signatories: any[];
  description: string;
};
