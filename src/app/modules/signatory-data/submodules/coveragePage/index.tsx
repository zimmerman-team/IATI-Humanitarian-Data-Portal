import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { CoverageLayout } from './layout';

/* store */
import { covStore } from './store';

/* consts */
import { baseCovTable, covOrgQuery, covQuery } from './const';

/* utils */
import get from 'lodash/get';
import { formatCovData } from './utils/formatCovData';
import { getRangeStart } from './utils/getRangeStart';

export function CoverageF(props) {
  const [state, actions] = covStore();

  const [perRange, setPerRange] = React.useState(12);

  // so on component mount we fetch the organisations total expenditures
  // AND the organisations default currency
  useEffect(() => {
    actions.covOrg.fetch({
      values: covOrgQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  // and once the covOrg data updates we get the date range period
  // and make a request to them transactions
  useEffect(() => {
    const orgData = get(state.covOrg, 'data.data.response.docs[0]', null);
    if (orgData) {
      const dateData = getRangeStart(orgData, perRange);
      setPerRange(dateData.periodRange);

      actions.coverage.fetch({
        values: covQuery(
          decodeURIComponent(props.match.params.code),
          dateData.periodRange,
          dateData.startDateTxt
        ),
      });
    }
  }, [state.covOrg.data]);

  const covData = get(
    state.coverage,
    'data.data.facets.disbs_expends.date_range.buckets',
    null
  );

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

  baseCovTable.data = formatCovData(
    covData,
    covOrgData,
    covOrgDefCurr,
    perRange
  );

  return <CoverageLayout tableData={baseCovTable} />;
}

export const Coverage = withRouter(CoverageF);
