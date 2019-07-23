type ListModel = {
  title?:string;
  items:ListItemModel[];
}

type ListItemModel = {
  label: string;
  values: ListItemValueModel[];
}

type ListItemValueModel = {
  qtc?: number;
  ptc?: number;
  date?: Date;
  version?: string
}

const ListModel:ListModel = {
  title:'Activity Summary',
  items: [
    {
      label: "For humanitarian activities",
      values: [
        {
          qtc: 1,
          ptc: 1
        }
      ],
    },
    {
      label: "Has funding recipient details",
      values: [
        {
          qtc: 1,
          ptc: 1
        }
      ],
    },
    {
      label: "With organisation type provided",
      values: [
        {
          qtc: 1,
          ptc: 1
        }
      ],
    },
  ]
}

export default ListModel;
