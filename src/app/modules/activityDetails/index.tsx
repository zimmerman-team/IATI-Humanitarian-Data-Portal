import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ActivityDetailsLayout } from './layout';

/* utils */
import get from 'lodash/get';
import { formatHeader } from './utils/formatHeader';

/* consts */
import {
  actMetadataQuery,
  actResultsQuery,
  baseTranstable,
  inTransactionsQuery,
  outTransactionsQuery,
} from './const';

/* store */
import { actDetailStore } from './store';

/* mock */
import { mockData } from './mock';
import { formatSections } from './utils/formatSections';
import { formatTransTable } from './utils/formatTransTable';
import { formatResults } from './utils/formatResults';

function ActivityDetail(props) {
  /* --------- INITIAL STORE VALUES ----------------- */
  const [state, actions] = actDetailStore();
  /* ----------------------------------------------- */

  /* --------- CALLING API'S ----------------------- */
  // calling activity results
  useEffect(() => {
    actions.actResults.fetch({
      values: actResultsQuery(props.match.params.code),
    });
  }, []);

  // calling activity metadata
  useEffect(() => {
    actMetadataQuery.q = `iati_identifier:${props.match.params.code}`;

    actions.actMetadata.fetch({ values: actMetadataQuery });
  }, []);

  // calling incoming transactions
  useEffect(() => {
    inTransactionsQuery.q = inTransactionsQuery.q.replace(
      '{identifier_value}',
      props.match.params.code
    );
    actions.incTransactions.fetch({ values: inTransactionsQuery });
  }, []);

  // calling outgoing transactions
  useEffect(() => {
    outTransactionsQuery.q = outTransactionsQuery.q.replace(
      '{identifier_value}',
      props.match.params.code
    );
    actions.outTransactions.fetch({ values: outTransactionsQuery });
  }, []);
  /* ----------------------------------------------- */
  /* --------- INITIALIZING STATES ----------------- */
  const actDetail = get(state.actMetadata, 'data.data.response.docs[0]', null);
  const incTranData = get(
    state.incTransactions,
    'data.data.response.docs',
    null
  );
  const outTransData = get(
    state.outTransactions,
    'data.data.response.docs',
    null
  );

  const resultData = get(state.actResults, 'data.data.response.docs', null);

  /* ----------------------------------------------- */

  /* --------- FORMATTING DATA ----------------- */
  const header = formatHeader(actDetail);
  const sections = formatSections(actDetail);
  const inTable = {
    ...baseTranstable,
    title: 'Incoming transactions',
    data: formatTransTable(incTranData, true),
  };

  const outTable = {
    ...baseTranstable,
    title: 'Outgoing transactions',
    data: formatTransTable(outTransData, false),
  };

  /* ----------------------------------------------- */

  const resultsCard = {
    title: 'Results',
    items: formatResults(resultData),
  };

  return (
    <ActivityDetailsLayout
      header={header}
      sections={sections}
      incomingTransactionsTableData={inTable}
      outgoingTransactionsTableData={outTable}
      lists={mockData.lists}
      tableCard={resultsCard}
    />
  );
}

export const ActivityDetails = withRouter(ActivityDetail);
