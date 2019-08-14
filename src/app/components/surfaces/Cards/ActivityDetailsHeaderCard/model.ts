export type ActivityDetailsHeaderCardModel = {
  organisation: OrganisationModel;
  activity: ActivityModel;
};

type OrganisationModel = {
  name: string;
  code: string;
};

type ActivityModel = {
  title: string;
  code: string;
  startDate: string;
  endDate: string;
};
