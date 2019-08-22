import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type IncomingModel = {
  activity: ActivityModel;
  horizontalBarChartCardData: HorizontalBarChartCardModel;
  inPageNavigation: InPageNavModel;
  lists: ListModel[];
};

type ActivityModel = {
  name: string;
  code: string;
  date: string;
};
