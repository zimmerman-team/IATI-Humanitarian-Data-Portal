import React from 'react';

/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

/* components */
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import MultiValuesCell from 'app/components/datadisplay/Table/common/MultiValuesCell';

// base query to get the activities
export const activitiesQuery = {
  q: `reporting_org_ref:{rep_org_val} AND
      (humanitarian:1 OR
      transaction_humanitarian:1 OR
      sector_vocabulary:1 OR
      (-sector_vocabulary:* AND sector_code:[70000 TO 79999]))`,
  fl: `iati_identifier,activity_status_code,title,recipient_country_narrative,
        activity_date_type,activity_date_iso_date,result`,
};

// the activity status code correspondence to
// the name status name according to the
// iati standard - http://reference.iatistandard.org/203/codelists/ActivityStatus/
export const statusNames = {
  '1': 'Pipeline/identification',
  '2': 'Implementation',
  '3': 'Finalisation',
  '4': 'Closed',
  '5': 'Cancelled',
  '6': 'Suspended',
};

export const activityBaseTable: TableModuleModel = {
  title: 'Humanitarian activities',
  data: [],
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
          const link = `/activity-detail/${value[0]}`;
          return <LinkCellModule link={link} value={value[1]} />;
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
    count: 11,
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
    serverSide: true,
    onChangePage: e => console.log('e', e),
    onChangeRowsPerPage: e => console.log('e', e),
  },
  columnsCell: ['', '', '', 'LinkCellModule', 'MultiValuesCellModule', ''],
  totalCell: false,
};
