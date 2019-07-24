export type ListModel = {
  title?: string;
  subtitle?: string;
  header?: boolean;
  items: ListItemModel[];
}

export type ListItemModel = {
  label: string;
  values: ListItemValueModel[];
}

export type ListItemValueModel = {
  qtc?: number;
  ptc?: number;
  date?: Date;
  version?: string
}

export const listModel:ListModel = {
  title:'Activity Summary',
  items: [
    {
      label: "For humanitarian activities",
      values: [
        {
          qtc: 1,
          ptc: 2
        }
      ],
    },
    {
      label: "Has funding recipient details",
      values: [
        {
          qtc: 3,
          ptc: 4
        }
      ],
    },
    {
      label: "With organisation type provided",
      values: [
        {
          qtc: 5,
          ptc: 6
        }
      ],
    },
  ]
};


