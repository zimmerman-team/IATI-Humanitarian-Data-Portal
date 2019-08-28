import {
  ListItemModel,
  ListModel,
} from 'app/components/datadisplay/Lists/model';

export interface YearBarChartObjectModel {
  year: string;
  activities: number;
  activitiesColor: string;
  humanitarianActivities: number;
  humanitarianActivitiesColor: string;
}

export interface HumanitarianDonutModel {
  activity: string;
  value: number;
}

export interface OverviewLayoutModel {
  humActFTSData: ListModel;
  humResultsData: ListModel;
  statusData: ListItemModel[];
  activitySummaryData: ListModel;
  financialReportingData: ListModel;
  humActWLocationInfoData: ListModel;
  humActWMultiYearFundData: ListModel;
  humOtherClassOfInterestData: ListModel;
  humActwGBClassificationsData: ListModel;
  activityTimelineData: YearBarChartObjectModel[];
  humanitarianElementsData: HumanitarianDonutModel[];
}
