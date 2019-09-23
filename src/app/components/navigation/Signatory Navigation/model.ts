export type SignatoryNavigationModel = {
  locations: LineModel[];
  activity: string; //or whole activity
};

export type LineModel = {
  fontSize?: number;
  items: LocationModel[];
};

export type LocationModel = {
  label: string;
  url: string;
};
