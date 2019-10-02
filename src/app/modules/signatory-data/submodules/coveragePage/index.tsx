import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { CoverageLayout } from './layout';

/* store */
import { covStore } from './store';

/* consts */
import { baseCovTable, covOrgQuery, covQuery, transDateQuery } from './const';

/* utils */
import get from 'lodash/get';
import { formatCovData } from './utils/formatCovData';

export function CoverageF(props) {
  const [state, actions] = covStore();

  // so on component mount we fetch the organisations total expenditures
  // AND the organisations default currency AND the very first transaction
  // date
  useEffect(() => {
    actions.covOrg.fetch({
      values: covOrgQuery(decodeURIComponent(props.match.params.code)),
    });
    actions.transDate.fetch({
      values: transDateQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  // and once the covOrg data updates we get the date range period
  // and make a request to them transactions
  useEffect(() => {
    const orgData = get(state.covOrg, 'data.data.response.docs', null);
    if (orgData) {
      actions.coverage.fetch({
        values: covQuery(
          decodeURIComponent(props.match.params.code),
          orgData,
          get(
            state.transDate,
            'data.data.response.docs[0].transaction_date_iso_date',
            '1900-01-01T00:00:00Z'
          )
        ),
      });
    }
  }, [state.covOrg.data, state.transDate.data]);

  const covData = get(state.coverage, 'data.data.facets.disbs_expends', null);

  const covOrgData = get(
    state.covOrg,
    'data.data.response.docs[0].organisation_total_expenditure',
    null
  );

  const covOrgDefCurr = get(
    state.covOrg,
    'data.data.response.docs[0].organisation_default_currency_code',
    null
  );

  baseCovTable.data = formatCovData(covData, covOrgData, covOrgDefCurr);

  return <CoverageLayout tableData={baseCovTable} />;
}

export const Coverage = withRouter(CoverageF);
