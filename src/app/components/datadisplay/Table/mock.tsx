/* core */
import React from 'react';
import get from 'lodash/get';

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
  title: 'Aggregated signatory data publication indicator values',
  data: [
    ['Total no. of Grand Bargain signatories', '51', '59', '20', '4'],
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
  title: 'Signatories or their affiliate organisations ',
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
      name: 'Publishing organisation',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LinkCellModule
              link={`/signatory-data/${value.code}/overview`}
              value={value.name}
            />
          );
        },
        customFilterListRender: value => `Publishing organisation: ${value}`,
      },
    },
    {
      name: 'GB signatory',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `GB signatory: ${value}`,
      },
    },
    {
      name: 'Organisation type',
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value => `Organisation type: ${value}`,
      },
    },
    {
      name: 'Latest IATI version',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Latest IATI version: ${value}`,
      },
    },
    {
      name: 'Publishing hum.data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListRender: value => `Publishing hum.data?: ${value}`,
      },
    },
    {
      name: 'Publishing v2.02 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListRender: value =>
          `Publishing v2.02 hum. data?: ${value}`,
      },
    },
    {
      name: 'Publishing v2.03 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListRender: value =>
          `Publishing v2.03 hum. data?: ${value}`,
      },
    },
    {
      name: 'Incoming trans traceability',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customFilterListRender: value => `Incoming TS traceability: ${value}`,
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
    sortFilterList: false,
    onDownload: (
      buildHead: (whatever) => string,
      buildBody: (nodata) => string,
      columns: any[],
      data: any[]
    ) => {
      let csvData = '';
      // building header
      columns.forEach(column => {
        csvData = csvData
          .concat('"'.concat(column.name).concat('"'))
          .concat(',');
      });
      csvData = csvData.concat('\n');
      // building body
      data.forEach(row => {
        row.data.forEach((cell, index) => {
          const cellVal = index === 0 ? cell.name : cell;
          csvData = csvData.concat('"'.concat(cellVal).concat('"')).concat(',');
        });
        csvData = csvData.concat('\n');
      });
      return csvData;
    },
    customSort: (data, colIndex, order) => {
      let indexStr = colIndex.toString();
      if (colIndex === 0) {
        indexStr = `[${colIndex}].name`;
      }
      const sortedData = data.sort((a, b) => {
        const v1 = get(a.data, indexStr, '');
        const v2 = get(b.data, indexStr, '');
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      });
      return order === 'asc' ? sortedData : sortedData.reverse();
    },
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
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
    { dataType: 'percentage', percValue: 'True' },
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
      { num: 0, currency: 'EUR' },
    ],
    [
      'Aidsfonds',
      '000 000 00',
      'National NGO',
      '3',
      '',
      { num: 0, currency: 'EUR' },
    ],
    [
      'UNESCO',
      '000 000 00',
      'National NGO',
      '3',
      '',
      { num: 0, currency: 'EUR' },
    ],
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
      name: 'Disbursements & expenditure',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Disbursements & expenditure',
            'Disbursements & expenditure'
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
      name: 'Mar',
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
      name: 'June',
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
      name: 'Oct',
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
