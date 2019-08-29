import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type OutgoingModel = {
  horizontalBarChartCardData: HorizontalBarChartCardModel;
  inPageNavigation: InPageNavModel;
  lists: ListModel[];
};
