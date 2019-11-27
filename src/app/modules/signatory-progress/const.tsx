import React from 'react';

/* utils */
import { getTooltipContent } from 'app/utils/generic';
import moment from 'moment';

/* interfaces/models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import { MUIDataTableColumnDef } from 'mui-datatables';

/* consts */
import { shortMonthNames } from 'app/__consts__/dates';
import { calculatePercentage } from './utils/general';

const today = new Date();

export const currDate = `${today.getDate()}.${
  shortMonthNames[today.getMonth()]
}.${today.getFullYear()}`;

const date = (value: Date) => {
  return `${
    shortMonthNames[value.getMonth()]
  } ${value.getFullYear()}`;
};

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
    label: 'May.2018',
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

export const linesOrder = [
  { n: 0, line: 'Publishing IATI traceability info' },
  {
    n: 1,
    line: 'Organisations using v2.02 or later of the IATI Standard',
  },
  { n: 2, line: 'Providing granular v2.03 data' },
  { n: 3, line: 'Providing granular v2.02 data' },
  { n: 4, line: 'Publishing hum. activity data' },
  { n: 5, line: 'Signatories publishing to IATI' },
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
  q: `(humanitarian:1 OR transaction_humanitarian:1 OR 
      (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
      (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
      (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
      (transaction_sector_code:[70000 TO 79999] OR
       transaction_sector_code:[93010 TO 93018])))`,
  rows: 0,
  'json.facet': jsonFacet,
};

// query for publishers publishing 2.02 data
export const use202OrLaterQuery = {
  q: `((humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:*) OR
        (humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*) OR
        (sector:* AND sector_vocabulary:10) OR (transaction_sector_code:* AND transaction_sector_vocabulary:10) OR (transaction_type:(12 13) OR
        default_aid_type_vocabulary:(2 3 4) OR
         reporting_org_type_code:24))`,
  rows: 0,
  'json.facet': jsonFacet,
};

// query for publishers publishing 2.02 data
export const pub202Query = {
  q: `((humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:*) OR
        (humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*) OR
        (sector:* AND sector_vocabulary:10) OR (transaction_sector_code:* AND transaction_sector_vocabulary:10))`,
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

export function constructDateRanges(signatoryProgressData) {
  const ArrayToBeReturned: any = [];
  signatoryProgressData.sort((a, b) => +moment(a.Date) - +moment(b.Date));
  signatoryProgressData.forEach(signatoryProgress => {
    ArrayToBeReturned.push({
      label: `${signatoryProgress.Date}`,
      colLabel: `${signatoryProgress.Date}`,
      value: `1900-01-01_TO_${signatoryProgress.Date}`,
      totalGBSig: parseInt(signatoryProgress.totalSig, 10),
      allCount: signatoryProgress.publishingOpenDataIATI, //37,
      allPerc: calculatePercentage(
        signatoryProgress.totalSig,
        signatoryProgress.publishingOpenDataIATI
      ),
      //73,
      use202OrLaterCount:
        signatoryProgress.using202OrLater === 'NOT MEASURED'
          ? null
          : signatoryProgress.using202OrLater,
      use202OrLaterPerc: calculatePercentage(
        signatoryProgress.publishingOpenDataIATI,
        signatoryProgress.using202OrLater
      ),
      humCount:
        signatoryProgress.publishingHumanitarianActivities === 'NOT MEASURED'
          ? null
          : signatoryProgress.publishingHumanitarianActivities,
      humPerc:
        signatoryProgress.publishingOpenDataIATI &&
        signatoryProgress.publishingHumanitarianActivities
          ? calculatePercentage(
              //calculate based on all signatories publishing data using IATI.
              signatoryProgress.publishingOpenDataIATI,
              signatoryProgress.publishingHumanitarianActivities
            )
          : null,
      count202:
        signatoryProgress.providingGranular202Data === 'NOT MEASURED'
          ? null
          : signatoryProgress.providingGranular202Data,
      perc202:
        signatoryProgress.publishingOpenDataIATI &&
        signatoryProgress.providingGranular202Data
          ? calculatePercentage(
              signatoryProgress.publishingOpenDataIATI,
              signatoryProgress.providingGranular202Data
            )
          : null,
      count203:
        signatoryProgress.providingGranular203Data === 'NOT MEASURED'
          ? null
          : signatoryProgress.providingGranular203Data,
      perc203:
        signatoryProgress.publishingOpenDataIATI &&
        signatoryProgress.providingGranular203Data
          ? calculatePercentage(
              signatoryProgress.publishingOpenDataIATI,
              signatoryProgress.providingGranular203Data
            )
          : null,
      tracCount:
        signatoryProgress.publishingTraceabilityInfo === 'NOT MEASURED'
          ? null
          : signatoryProgress.publishingTraceabilityInfo,
      tracPerc:
        signatoryProgress.publishingOpenDataIATI &&
        signatoryProgress.publishingTraceabilityInfo
          ? calculatePercentage(
              signatoryProgress.publishingOpenDataIATI,
              signatoryProgress.publishingTraceabilityInfo
            )
          : null,
    });
  });
  // for today column
  ArrayToBeReturned.push({
    label: currDate,
    colLabel: `Today`,
    value: '1900-01-01_TO_NOW',
  });

  return ArrayToBeReturned;
}

export const getBaseTable = (
  tooltipsData,
  signatoryProgressData
): TableModuleModel => {
  // console.log(tooltipsData);
  // so here we push in all the labels from the date ranges
  let dateranges: any[] = [];
  if (signatoryProgressData !== null) {
    dateranges = constructDateRanges(signatoryProgressData);
  }
  const columns: MUIDataTableColumnDef[] = dateranges.map(range => {
    return {
      name: range.colLabel.includes('Today')
        ? `Today ${currDate}`
        : date(new Date(range.colLabel)),
      //: new Date(range.colLabel).toString().slice(3, 16),
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
        let info = '';
        if (value.toLowerCase() !== 'of these') {
          info = getTooltipContent(tooltipsData, 'Signatory Progress', value);
        }
        return <InfoCellModule value={value} info={info} />;
      },
    },
  });

  // and we push in changes made as the last column
  columns.push({
    name: `Changes ${signatoryProgressData !== null &&
      date(new Date(signatoryProgressData[0].Date))} to today`,
    options: {
      filter: true,
      filterType: 'checkbox',
    },
  });

  return {
    columns,
    title: 'Aggregated signatory data publication indicator values',
    data: [],
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
  };
};
