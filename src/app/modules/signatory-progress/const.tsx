import React from 'react';

/* interfaces/models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import { MUIDataTableColumnDef } from 'mui-datatables';

/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

const today = new Date();

const currDate = `${today.getDate()}.${
  shortMonthNames[today.getMonth()]
}.${today.getFullYear()}`;

// this variable basically stores the fixed date
// ranges and will be used to extract the values
// from the query which keys have these
// ranges specified
export const dateRanges = [
  {
    // label used for the linechart
    label: '30.Jun.2017',
    // label for the column header in the table
    colLabel: 'Baseline June 2017',
    // value in the response and query
    value: '1900-01-01_TO_2017-06-30',
    // and here we'll have the fixed values
    allCount: 37,
    allPerc: 73,
    humCount: 31,
    humPerc: 84,
    count202: 0,
    perc202: 0,
    count203: null,
    perc203: null,
    tracCount: null,
    tracPerc: null,
  },
  // {
  //   // label used for the linechart
  //   label: '31.Dec.2018',
  //   // label for the column header in the table
  //   colLabel: 'Dec 2018',
  //   // value in the response and query
  //   value: '1900-01-01_TO_2018-12-31',
  // },
  {
    // label used for the linechart
    label: '1.May.2018',
    // label for the column header in the table
    colLabel: 'May 2018',
    // value in the response and query
    value: '1900-01-01_TO_2018-05-01',
    allCount: 44,
    allPerc: 75,
    humCount: 36,
    humPerc: 82,
    count202: 8,
    perc202: 18,
    count203: null,
    perc203: null,
    tracCount: null,
    tracPerc: null,
  },
  {
    // label used for the linechart
    label: '31.May.2019',
    // label for the column header in the table
    colLabel: 'May 2019',
    // value in the response and query
    value: '1900-01-01_TO_2019-05-31',
    allCount: 48,
    allPerc: 81,
    humCount: 43,
    humPerc: 90,
    count202: 14,
    perc202: 29,
    count203: null,
    perc203: null,
    tracCount: null,
    tracPerc: null,
  },
  {
    // label used for the linechart
    label: currDate,
    // label for the column header in the table
    colLabel: `Today [${currDate}]`,
    // value in the response and query
    value: '1900-01-01_TO_NOW',
  },
];

// so this is mainly the result forming query that we need for the data
// formed in a solr way responses are also solr like
const jsonFacet = `{
      org_refs: {
        type: 'terms',
        field: 'reporting_org_ref',
        limit: -1,
      },
}`;

// so this is a modified version of the facets used for humanitarian
// data(the above facet variable), because for most of other data, we don't need to check
// specific fields of the activity(humanitarian) and we don't need to associated
// the dates with that activity to get most accurate results
// We can use this facet which actually queries
// according to the 'date_created' of the dataset which will be more accurate
// as we're talking about data that has been published(created), where
// for the humanitarian data we could only use the last_updated_datetime field
// as that was the closest thing to when the humanitarian data/humanitarian activity
// was published, for others this issue does not apply so we can freely use
// the date_created of the dataset.
// const jsonCreatedFacet = `
//         {"orgs_[1900-01-01_TO_2017-06-30]":
//           { "type":"query",
//             "q":"date_created:[1900-01-01T00:00:00Z TO 2017-06-30T24:00:00Z]",
//             "facet":{"org_count":"unique(reporting_org_ref)"}
//             },
//          "orgs_[1900-01-01_TO_2018-12-31]":
//           { "type":"query",
//             "q":"date_created:[1900-01-01T00:00:00Z TO 2018-12-31T24:00:00Z]",
//             "facet":{"org_count":"unique(reporting_org_ref)"}
//             },
//          "orgs_[1900-01-01_TO_2019-05-31]":
//           { "type":"query",
//             "q":"date_created:[1900-01-01T00:00:00Z TO 2019-05-31T24:00:00Z]",
//             "facet":{"org_count":"unique(reporting_org_ref)"}
//             },
//          "orgs_[1900-01-01_TO_NOW]":
//           { "type":"query",
//             "q":"date_created:[1900-01-01T00:00:00Z TO NOW]",
//             "facet":{"org_count":"unique(reporting_org_ref)"}
//             },
//         }
//       `;

// so this is the full query to get humanitarian
// publishers divided by fixed date ranges
export const humPubQuery = {
  q: `(humanitarian:1 OR
      transaction_humanitarian:1 OR
      sector_vocabulary:1 OR
      (-sector_vocabulary:* AND sector_code:[70000 TO 79999]))`,
  rows: 0,
  'json.facet': jsonFacet,
};

// query for publishers publishing 2.02 data
export const pub202Query = {
  q: `((humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:*) OR
        (humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*) OR
        (sector:* AND sector_vocabulary:10))`,
  rows: 0,
  'json.facet': jsonFacet,
};

// query for publishers publishing traceability info data
export const pubTracQuery = {
  q: `(transaction_type:1 AND transaction_provider_org_provider_activity_id:*)`,
  rows: 0,
  'json.facet': jsonFacet,
};

// query for publishers publishing 2.03 data
export const pub203Query = {
  q: `(transaction_type:(12 13) OR
        default_aid_type_vocabulary:(2 3 4) OR
         reporting_org_type_code:24)`,
  rows: 0,
  'json.facet': jsonFacet,
};

// so here we push in all the labels from the date ranges
const columns: MUIDataTableColumnDef[] = dateRanges.map(range => {
  return {
    name: range.colLabel,
    options: {
      filter: true,
      filterType: 'checkbox',
    },
  };
});

// then we push in the status column as the first column
columns.unshift({
  name: 'Status',
  options: {
    filter: true,
    filterType: 'checkbox',
    customBodyRender: (value, tableMeta, updateValue) => {
      let info = null;

      if (value.toLowerCase() !== 'of these') {
        info = value;
      }

      return <InfoCellModule value={value} info={info} />;
    },
  },
});

// and we push in changes made as the last column
columns.push({
  name: 'Changes [31. May] to Today',
  options: {
    filter: true,
    filterType: 'checkbox',
  },
});

export const baseTable: TableModuleModel = {
  columns,
  title: 'Aggregated Signatory Data Publication Indicator Values',
  data: [],
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
