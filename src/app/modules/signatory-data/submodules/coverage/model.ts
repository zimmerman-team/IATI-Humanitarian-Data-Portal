import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export type CoverageModel = {
  activity: ActivityModel;
  tableData: TableModuleModel;
};

type ActivityModel = {
  name: string;
  code: string;
  date: string;
};
