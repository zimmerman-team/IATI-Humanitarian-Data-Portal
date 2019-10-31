import { ListModel } from 'app/components/datadisplay/Lists/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type OutgoingModel = {
  horizontalBarChartCardData: HorizontalBarChartCardModel;
  lists: ListModel[];
};
