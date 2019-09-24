import React from 'react';

/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

/* components */
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import MultiValuesCell from 'app/components/datadisplay/Table/common/MultiValuesCell';

// base query to get the activities
export const activitiesQuery = repOrgRef => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND
      (humanitarian:1 OR transaction_humanitarian:1 
        OR sector_vocabulary:1 OR (-sector_vocabulary:* 
        AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) 
        OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* 
        AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
    fl: `iati_identifier,activity_status_code,title,recipient_country_narrative,
        activity_date_type,activity_date_iso_date,result`,
  };
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
          const link = `/activity-detail/${encodeURIComponent(value[0])}`;
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
