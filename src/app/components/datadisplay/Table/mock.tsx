/* core */
import React from 'react';

/* project-comps */
import {
  getInfoTHead,
  formatMoney,
} from 'app/components/datadisplay/Table/helpers';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import IconCellModule from 'app/components/datadisplay/Table/common/IconCell';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import MultiValuesCell from 'app/components/datadisplay/Table/common/MultiValuesCell';

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
    {
      name: 'Status',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <InfoCellModule value={value} info={value} />;
        },
      },
    },
    {
      name: 'Baseline June 2017',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'May 2019',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Today [DD MM YYYY]',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Changes [20. May] to Today',
      options: {
        filter: true,
        filterType: 'checkbox',
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
  columnsCell: ['InfoCellModule'],
};

export const mockDataVar2: TableModuleModel = {
  title: 'Signatories or their Affiliate Organisations ',
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
      name: 'Publishing Organisation',
      options: {
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <LinkCellModule link="#" value={value} />;
        },
      },
    },
    {
      name: 'GB signatory',
      options: {
        filter: true,
        filterType: 'dropdown',
      },
    },
    {
      name: 'Organisation type',
      options: {
        filter: true,
        filterType: 'dropdown',
      },
    },
    {
      name: 'Latest IATI version',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Publishing Hum.Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['true', 'false', 'na'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
      },
    },
    {
      name: 'Publishing v2.02 Hum. Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['true', 'false', 'na'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
      },
    },
    {
      name: 'Publishing v2.03 Hum. Data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['true', 'false', 'na'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
      },
    },
    {
      name: 'Incoming TS Traceability',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['true', 'false', 'na'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
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
    viewColumns: true,
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
  totalCell: true,
  totalRowColsDef: [
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'count' },
    { dataType: 'percentage', percValue: '2.03' },
    { dataType: 'percentage', percValue: 'true' },
    { dataType: 'percentage', percValue: 'true' },
    { dataType: 'percentage', percValue: 'true' },
    { dataType: 'percentage', percValue: 'true' },
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
        customBodyRender: (value, tableMeta, updateValue) => {
          return <LinkCellModule link="#" value={value} />;
        },
      },
    },
    {
      name: 'Country(s)',
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <MultiValuesCell value={value} />;
        },
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
    viewColumns: true,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
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
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
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
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
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
          value: "Promoting Opportunities for Women's Empowerment and Rights 2",
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
    ['01. Jan-2018', '31. Dec 2018', 123324234.0, 123324234.0, '80%'],
    ['01. Jan-2017', '31. Dec 2018', 123324234.0, 123324234.0, '40%'],
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
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value > 0) return formatMoney(value);
          return 'No data';
        },
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
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value > 0) return formatMoney(value);
          return 'No data';
        },
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
  totalCell: true,
  totalRowColsDef: [
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'money' },
    { dataType: 'money' },
    { dataType: 'none' },
  ],
};

export const mockDataVar6: TableModuleModel = {
  title: 'Incoming transactions',
  data: [
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      '',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      '',
    ],

    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      'XM-DAV-7PPR-28317',
    ],
    [
      '01. Jan-2018',
      'France',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
      '',
    ],
    [
      '01. Jan-2018',
      'Germany',
      'Netherlands',
      123324234.0,
      123324234.0,
      123324234.0,
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
        filterOptions: { names: ['France', 'Germany'] },
      },
    },
    {
      name: 'To',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['Netherlands'] },
      },
    },
    {
      name: 'Pledged',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value > 0) return formatMoney(value);
          return 'No data';
        },
      },
    },
    {
      name: 'Incoming funds',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value > 0) return formatMoney(value);
          return 'No data';
        },
      },
    },
    {
      name: 'Commitment',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value > 0) return formatMoney(value);
          return 'No data';
        },
      },
    },
    {
      name: 'Trace ID.',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['XM-DAV-7PPR-28317'] },
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
  totalCell: true,
  totalRowColsDef: [
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'money' },
    { dataType: 'money' },
    { dataType: 'money' },
    { dataType: 'none' },
  ],
};

export const mockDataVar7: TableModuleModel = {
  title: '',
  data: [
    [
      '2019',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
    [
      '2018',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
    [
      '2017',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
      '00',
    ],
  ],
  columns: [
    {
      name: 'Year',
      options: {
        filter: false,
      },
    },
    {
      name: 'Jan',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Feb',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'March',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'April',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'May',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Juni',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'July',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Jan',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Aug',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Sep',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Okt',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Nov',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Dec',
      options: {
        filter: true,
        filterType: 'checkbox',
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
  columnsCell: [''],
};
