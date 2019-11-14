import { ListModel } from 'app/components/datadisplay/Lists/model';
import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type IncomingModel = {
  lists: ListModel[];
  inPageNavigation: InPageNavModel;
  horizontalBarChartCardData: HorizontalBarChartCardModel;
};
