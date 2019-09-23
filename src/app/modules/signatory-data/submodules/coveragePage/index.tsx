import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { CoverageLayout } from './layout';
import moment from 'moment';

/* store */
import { covStore } from './store';

/* consts */
import { baseCovTable, covOrgQuery, covQuery } from './const';

/* utils */
import get from 'lodash/get';
import { formatCovData } from './utils/formatCovData';

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
      let periodRange = perRange;
      const totExps = get(orgData, 'organisation_total_expenditure', []);
      let startDateTxt = '1900-01-01T00:00:00Z';
      if (totExps.length > 0) {
        const lastItem = totExps[totExps.length - 1];

        const startDate = moment(lastItem.period_start);
        let startMonth = startDate.month() + 1 + '';
        startMonth = startMonth.length < 2 ? `0${startMonth}` : startMonth;
        let startDay = startDate.date() + '';
        startDay = startDay.length < 2 ? `0${startDay}` : startDay;
        startDateTxt = `1900-${startMonth}-${startDay}T00:00:00Z`;
        // we also add one day here so that moment would include the
        // last day into the difference calculation
        const endDate = moment(lastItem.period_end).add(1, 'days');
        periodRange = endDate.diff(startDate, 'months');
        setPerRange(periodRange);
      }

      actions.coverage.fetch({
        values: covQuery(
          decodeURIComponent(props.match.params.code),
          periodRange,
          startDateTxt
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
