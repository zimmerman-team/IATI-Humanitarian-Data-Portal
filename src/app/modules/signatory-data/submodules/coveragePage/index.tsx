import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { CoverageLayout } from './layout';
import { mockData } from './mock';

/* store */
import { covStore } from './store';

/* consts */
import { baseCovTable, covQuery } from './const';

/* utils */
import get from 'lodash/get';
import { formatCovData } from './utils/formatCovData';

export function CoverageF(props) {
  const [state, actions] = covStore();

  useEffect(() => {
    actions.coverage.fetch({ values: covQuery(props.match.params.code) });
  }, []);

  const covData = get(
    state.coverage,
    'data.data.facets.transactions.buckets',
    null
  );

  baseCovTable.data = formatCovData(covData);

  return <CoverageLayout tableData={baseCovTable} />;
}

export const Coverage = withRouter(CoverageF);
