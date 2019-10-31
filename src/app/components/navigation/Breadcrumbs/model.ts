export type BreadcrumbModel = {
  currentLocation: string;
  previousLocations: LocationModel[];
};

export type LocationModel = {
  url: string;
  label: string;
};
