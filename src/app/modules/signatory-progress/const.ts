const monthNames = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const today = new Date();

const currDate = `${today.getDate()}.${
  monthNames[today.getMonth()]
}.${today.getFullYear()}`;

// this variable basically stores the fixed date
// ranges and will be used to extract the values
// from the query which keys have these
// ranges specified
export const dateRanges = [
  {
    // label used for the linechart
    label: '30.Jun.2017',
    // value in the response and query
    value: '1900-01-01_TO_2017-06-30',
  },
  {
    // label used for the linechart
    label: '31.Dec.2018',
    // value in the response and query
    value: '1900-01-01_TO_2018-12-31',
  },
  {
    // label used for the linechart
    label: '31.May.2019',
    // value in the response and query
    value: '1900-01-01_TO_2019-05-31',
  },
  {
    // label used for the linechart
    label: '30.Jun.2017',
    // value in the response and query
    value: '1900-01-01_TO_NOW',
  },
];

// so this is mainly the result forming query that we need for the data
// formed in a solr way responses are also solr like
const jsonFacet = `
        {"orgs_[1900-01-01_TO_2017-06-30]":
          { "type":"query",
            "q":"last_updated_datetime:[1900-01-01T00:00:00Z TO 2017-06-30T24:00:00Z]",
            "facet":{"org_count":"unique(reporting_org_ref)"}
            },
         "orgs_[1900-01-01_TO_2018-12-31]":
          { "type":"query",
            "q":"last_updated_datetime:[1900-01-01T00:00:00Z TO 2018-12-31T24:00:00Z]",
            "facet":{"org_count":"unique(reporting_org_ref)"}
            },
         "orgs_[1900-01-01_TO_2019-05-31]":
          { "type":"query",
            "q":"last_updated_datetime:[1900-01-01T00:00:00Z TO 2019-05-31T24:00:00Z]",
            "facet":{"org_count":"unique(reporting_org_ref)"}
            },
         "facet_name":
          { "type":"query",
            "q":"last_updated_datetime:[1900-01-01T00:00:00Z TO NOW]",
            "facet":{"org_count":"unique(reporting_org_ref)"}
            },
        }
      `;

// so this is the full query to get humanitarian
// publishers divided by fixed date ranges
export const humPubQuery = {
  q: `humanitarian:1 OR
      transaction_humanitarian:1 OR
      sector_vocabulary:1 OR
      (-sector_vocabulary:* AND sector_code:[70000 TO 79999])`,
  rows: 0,
  'json.facet': jsonFacet,
};
// and this is the query for all publishers
// divided by the same date ranges so we could compare them
export const pubQuery = {
  q: '*:*',
  rows: 0,
  'json.facet': jsonFacet,
};
