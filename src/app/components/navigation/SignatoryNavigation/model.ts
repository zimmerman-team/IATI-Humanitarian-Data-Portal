export type SignatoryNavigationModel = {
  items: NavItemModel[];
  activity?: string; //or whole activity
};

export type NavItemModel = {
  label: string;
  url: string;
};
