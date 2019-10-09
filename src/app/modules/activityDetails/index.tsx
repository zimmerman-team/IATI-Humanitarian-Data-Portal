import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ActivityDetailsLayout } from 'app/modules/activityDetails/layout';

/* utils */
import get from 'lodash/get';
import { formatHeader } from 'app/modules/activityDetails/utils/formatHeader';
import { formatSections } from 'app/modules/activityDetails/utils/formatSections';
import { formatTransTable } from 'app/modules/activityDetails/utils/formatTransTable';
import { formatResults } from 'app/modules/activityDetails/utils/formatResults';
import { formatActivityElements } from 'app/modules/activityDetails/utils/formatActivityElements';

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
  const [redirect, setRedirect] = React.useState(false);

  const codeLists = useStoreState(reduxstate => reduxstate.codelists);

  const actMetadata = state.actMetadata.data;

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
    setRedirect(true);
  }, [props.match.params.code]);

  // calling incoming transactions
  useEffect(() => {
    actions.incTransactions.fetch({
      values: inTransactionsQuery(decodeURIComponent(props.match.params.code)),
    });
  }, [props.match.params.code]);

  // calling outgoing transactions
  useEffect(() => {
    actions.outTransactions.fetch({
      values: outTransactionsQuery(decodeURIComponent(props.match.params.code)),
    });
  }, [props.match.params.code]);

  // here we'll check if the requested activity exists
  // and if it doesn't we'll reroute the user to a 404 page
  useEffect(() => {
    if (
      !get(actMetadata, 'data.response.docs[0].iati_identifier', null) &&
      redirect
    ) {
      props.history.replace('/notFound');
    }
  }, [actMetadata]);
  /* ----------------------------------------------- */
  /* --------- INITIALIZING STATES ----------------- */
  const actDetail = get(actMetadata, 'data.response.docs[0]', null);
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
