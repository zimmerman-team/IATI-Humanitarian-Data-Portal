/* models/interfaces */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { OrgTotExpItemModel } from './store/interfaces';

/* utils */
import {
  formatMoney,
  getInfoTHead,
} from 'app/components/datadisplay/Table/helpers';
import { formatTransFacets } from './utils/formatTransFacets';

export const covQuery = (
  repOrgRef: string,
  covOrgData: OrgTotExpItemModel[] | null
) => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND transaction_type:(1 3 4) 
        AND (humanitarian:1 OR sector_vocabulary:1 
        OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] 
        OR sector_code:[93010 TO 93018])) OR transaction_humanitarian:1 
        OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* 
        AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
    rows: 0,
    'json.facet': `{
      disbs_expends: {
        type: 'query',
        q: 'transaction_type:(3 4)',
        facet: {
          ${formatTransFacets(covOrgData)}
        },
      },
    }`,
  };
};

export const covOrgQuery = (repOrgRef: string) => {
  return {
    q: `organisation_identifier:${repOrgRef}`,
    fl:
      'organisation_total_expenditure:[json],organisation_identifier,organisation_default_currency_code',
    wt: 'json',
  };
};

export const baseCovTable: TableModuleModel = {
  title: 'Coverage data',
  data: [],
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
          if (value && value.length > 0) {
            return formatMoney(value[0], value[1]);
          }
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
          if (value && value.length > 0) {
            return formatMoney(value[0], value[1]);
          }
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
