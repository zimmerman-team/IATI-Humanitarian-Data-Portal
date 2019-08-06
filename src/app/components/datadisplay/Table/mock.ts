import { TableModuleModel } from './model';
import { getInfoTHead } from '.';

export const mockDataVar1: TableModuleModel = {
  title: 'Aggregated Signatory Data Publication Indicator Values',
  data: [
    ['Total no. of Grand Bargain Signatories', '51', '59', '20', '4'],
    [
      'Organisations* publishing to IATI',
      '73% (37)',
      '81% (48)',
      '100% (12)',
      '- 34',
    ],
  ],
  columns: [
    'Status',
    'Baseline June 2017',
    'May 2019',
    'Today [DD MM YYYY]',
    'Changes [20. May] to Today',
  ],
  options: {
    print: true,
    search: false,
    filter: false,
    download: true,
    rowHover: false,
    pagination: false,
    viewColumns: false,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['InfoCellModule'],
  customRows: true,
};

export const mockDataVar2: TableModuleModel = {
  title: 'Signatories or their Affiliate Oranisations ',
  data: [
    [
      'ActionAid UK',
      'ActionAid UK',
      'International NGO',
      '2.03',
      'true',
      'true',
      'true',
      'false',
    ],
    [
      'ActionAid UK',
      'ActionAid UK',
      'Multilateral',
      '2.03',
      'true',
      'false',
      'true',
      'na',
    ],
  ],
  columns: [
    {
      name: 'Publishing Organistion',
      options: {
        filter: true,
        viewColumns: true,
        filterType: 'checkbox',
        filterOptions: ['ActionAid UK'],
      },
    },
    {
      name: 'GB signatory',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['ActionAid UK'],
      },
    },
    {
      name: 'Organisation type',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['International NGO', 'Multilateral'],
      },
    },
    {
      name: 'Latest IATI version',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['2.03'],
      },
    },
    {
      name: 'Publishing Hum.Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['true', 'false', 'na'],
      },
    },
    {
      name: 'Publishing v2.02 Hum. Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['true', 'false', 'na'],
      },
    },
    {
      name: 'Publishing v2.03 Hum. Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['true', 'false', 'na'],
      },
    },
    {
      name: 'Incoming TS Traceability',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['true', 'false', 'na'],
      },
    },
  ],
  options: {
    print: false,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: false,
    viewColumns: false,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: [
    'LinkCellModule',
    '',
    '',
    '',
    'IconCellModule',
    'IconCellModule',
    'IconCellModule',
    'IconCellModule',
  ],
  customRows: true,
  totalCell: true,
  totalCellData: [
    '',
    '',
    '98',
    '74 (75%)',
    '74 (75%)',
    '10 (23%)',
    '20 (46%)',
    '21 (55%)',
  ],
};

export const mockDataVar3: TableModuleModel = {
  title: 'Humanitarian activities',
  data: [
    [
      '29 Jan 2018',
      '',
      'Implementation',
      'Promoting Opportunities for Women s Empowerment and Rights',
      ['Ukraine', 'Latvia', 'Estonia'],
      '1',
    ],
    [
      '29 Jan 2018',
      '',
      'Implementation',
      'Promoting Opportunities for Women s Empowerment and Rights',
      ['Ukraine'],
      '1',
    ],
    [
      '29 Jan 2018',
      '',
      'Implementation',
      'Promoting Opportunities for Women s Empowerment and Rights',
      ['Ukraine'],
      '1',
    ],
  ],
  columns: [
    {
      name: 'Start date',
      options: {
        filter: false,
      },
    },
    {
      name: 'End date',
      options: {
        filter: false,
      },
    },
    {
      name: 'Status',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Activity title',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Country(s)',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Result',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    pagination: true,
    viewColumns: false,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  customRows: true,
  totalCell: false,
};

export const mockDataVar4: TableModuleModel = {
  title: 'Providers',
  data: [
    [
      'Action against hunger Canada',
      '000 000 00',
      'National NGO',
      '3',
      '',
      '€000,000.00',
    ],
    ['Aidsfonds', '000 000 00', 'National NGO', '3', '', '€000,000.00'],
    ['UNESCO', '000 000 00', 'National NGO', '3', '', '€000,000.00'],
  ],
  columns: [
    {
      name: 'Organisation / type / activity',
      options: { filter: false },
    },
    {
      name: 'IATI reference',
      options: { filter: false },
    },
    {
      name: 'Organisation type',
      options: { filter: false },
    },
    {
      name: 'Activites',
      options: { filter: false },
    },
    {
      name: 'Start date',
      options: { filter: false },
    },
    {
      name: 'Amount',
      options: { filter: false },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: false,
    download: true,
    rowHover: true,
    pagination: true,
    viewColumns: true,
    responsive: 'scroll',
    expandableRows: true,
    selectableRows: 'none',
    expandableRowsOnClick: true,
  },
  columnsCell: ['', '', '', '', '', ''],
  customRows: false,
  totalCell: false,
  expandableData: [
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
    [
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '1',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
      [
        {
          value: "Promoting Opportunities for Women's Empowerment and Rights",
          type: 'LinkCellModule',
          colSpan: 3,
        },
        {
          value: '2',
          colSpan: 1,
        },
        {
          value: '23 May 2018',
          colSpan: 1,
        },
        {
          value: '€000,000.00',
          colSpan: 1,
        },
      ],
    ],
  ],
};

export const mockDataVar5: TableModuleModel = {
  title: 'Coverage data',
  data: [
    [
      '01. Jan-2018',
      '31. Dec 2018',
      '€123,324,234.00',
      '€123,324,234.00',
      '80%',
    ],
    [
      '01. Jan-2017',
      '31. Dec 2018',
      '€123,324,234.00',
      '€123,324,234.00',
      '40%',
    ],
    ['01. Jan-2017', '31. Dec 2017', 'No data', 'No data', 'No data'],
    ['01. Jan-2016', '31. Dec 2016', 'No data', 'No data', 'No data'],
    ['01. Jan-2015', '31. Dec 2015', 'No data', 'No data', 'No data'],
  ],
  columns: [
    {
      name: 'Period started',
      options: {
        filter: false,
      },
    },
    {
      name: 'Period end',
      options: {
        filter: false,
      },
    },
    {
      name: 'Operational funds available',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Operational funds available',
            'Operational funds available'
          ),
      },
    },
    {
      name: 'Disbursements & Expenditure',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Disbursements & Expenditure',
            'Disbursements & Expenditure'
          ),
      },
    },
    {
      name: 'Rating',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Rating', 'Rating'),
      },
    },
  ],
  options: {
    print: true,
    search: false,
    filter: false,
    download: true,
    rowHover: false,
    pagination: false,
    viewColumns: true,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', '', ''],
  customRows: false,
  totalCell: true,
  totalCellData: ['', '', '€000,000,000.00', '€000,000,000.00', ''],
};

export const mockDataVar6: TableModuleModel = {
  title: 'Incoming transactions',
  data: [
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      '',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      '',
    ],

    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      '',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      '€123,324,234.00',
      '€123,324,234.00',
      '€123,324,234.00',
      '',
    ],
  ],
  columns: [
    {
      name: 'Date',
      options: {
        filter: false,
      },
    },
    {
      name: 'From',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['France', 'Germany'],
      },
    },
    {
      name: 'To',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['Netherlands'],
      },
    },
    {
      name: 'Pledged',
      options: {
        filter: false,
      },
    },
    {
      name: 'Incoming funds',
      options: {
        filter: false,
      },
    },
    {
      name: 'Commitment',
      options: {
        filter: false,
      },
    },
    {
      name: 'Trace ID.',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: ['XM-DAV-7PPR-28317'],
      },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: false,
    pagination: true,
    viewColumns: true,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', '', '', '', ''],
  customRows: false,
  totalCell: true,
  totalCellData: [
    '',
    '',
    '',
    '€000,000,000.00',
    '€000,000,000.00',
    '€000,000,000.00',
    '',
  ],
};
