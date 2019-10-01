import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ActivityDetailsLayout } from './layout';

/* utils */
import get from 'lodash/get';
import { formatHeader } from './utils/formatHeader';
import { formatSections } from './utils/formatSections';
import { formatTransTable } from './utils/formatTransTable';
import { formatResults } from './utils/formatResults';
import { formatActivityElements } from './utils/formatActivityElements';

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
import { useStoreState } from 'easy-peasy';

function ActivityDetail(props) {
  /* --------- INITIAL STORE VALUES ----------------- */
  const [state, actions] = actDetailStore();

  const codeLists = useStoreState(reduxstate => reduxstate.codelists);

  /* ----------------------------------------------- */

  /* --------- CALLING API'S ----------------------- */
  // calling activity results
  useEffect(() => {
    actions.actResults.fetch({
      values: actResultsQuery(decodeURIComponent(props.match.params.code)),
    });
  }, [props.match.params.code]);

  // calling activity metadata
  useEffect(() => {
    actMetadataQuery.q = `iati_identifier:${decodeURIComponent(
      props.match.params.code
    )}`;

    actions.actMetadata.fetch({ values: actMetadataQuery });
  }, [props.match.params.code]);

  // calling incoming transactions
  useEffect(() => {
    inTransactionsQuery.q = inTransactionsQuery.q.replace(
      '{identifier_value}',
      decodeURIComponent(props.match.params.code)
    );
    actions.incTransactions.fetch({ values: inTransactionsQuery });
  }, [props.match.params.code]);

  // calling outgoing transactions
  useEffect(() => {
    outTransactionsQuery.q = outTransactionsQuery.q.replace(
      '{identifier_value}',
      decodeURIComponent(props.match.params.code)
    );
    actions.outTransactions.fetch({ values: outTransactionsQuery });
  }, [props.match.params.code]);
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
    ...formatTransTable(
      incTranData,
      true,
      get(codeLists, 'transTypeNames.data.data', []),
      actDetail ? actDetail.default_currency : null
    ),
  };

  const outTable = {
    ...baseTranstable,
    title: 'Outgoing transactions',
    ...formatTransTable(
      outTransData,
      false,
      get(codeLists, 'transTypeNames.data.data', []),
      actDetail ? actDetail.default_currency : null
    ),
  };

  const elementLists = formatActivityElements(actDetail, codeLists);

  const resultsCard = {
    title: 'Results',
    items: formatResults(
      resultData,
      get(codeLists, 'resultTypeNames.data.data', [])
    ),
  };

  /* ----------------------------------------------- */

  return (
    <ActivityDetailsLayout
      header={header}
      sections={sections}
      incomingTransactionsTableData={inTable}
      outgoingTransactionsTableData={outTable}
      lists={elementLists}
      tableCard={resultsCard}
    />
  );
}

export const ActivityDetails = withRouter(ActivityDetail);
