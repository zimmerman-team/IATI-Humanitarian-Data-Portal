export type SignatoryNavigationModel = {
  locations: LocationModel[];
  activity: string; //or whole activity
};

export type LocationModel = {
  label: string;
  url: string;
};
