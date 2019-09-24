import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from './layout';

/* local store */
import { recStore } from './store';

/* consts */
import { humActQuery, recipientsQuery } from './const';
import { pivotKey } from './store/interfaces';
import { allProvidersQuery, baseProviderConfig } from '../providersPage/consts';

/* utils */
import get from 'lodash/get';
import { getBarChartData } from '../providersPage/utils/getBarChartData';
import { getTableData } from '../providersPage/utils/getTableData';

function RecipientsF(props) {
  const [state, actions] = recStore();

  useEffect(() => {
    humActQuery.q = humActQuery.q.replace(
      '{rep_org_ref}',
      decodeURIComponent(props.match.params.code)
    );
    // so here we get the humanitarian activities of the signatory
    // and we will use the activity identifiers as filters for the
    // transactions BUT one thing is left out of the query for these activities
    // it is the 'transaction/@humanitarion' query check as it makes more
    // sense to check if the transaction is humanitarian when
    // checking the transactions endpoint, as some of the activities
    // transactions may not be humanitarian, so it would be not
    // accurate data in that sense
    actions.humActivities.fetch({ values: humActQuery });

    // and here we get all the receiving organisation types
    // of the signatory
    actions.sigAllReceivers.fetch({
      values: allProvidersQuery(
        decodeURIComponent(props.match.params.code),
        'transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type'
      ),
    });

    // we also get the codelist here
    actions.orgtypecodelist.fetch({});
  }, []);

  useEffect(() => {
    const humIdentifiers = get(
      state.humActivities,
      `data.data.response.docs`,
      []
    );
    if (humIdentifiers.length > 0) {
      const iatiIdentifiers = humIdentifiers
        .map(hum => hum.iati_identifier)
        .join(' ');
      // so we call table data here
      actions.recipients.fetch({
        values: recipientsQuery(
          decodeURIComponent(props.match.params.code),
          iatiIdentifiers
        ),
      });
    }
  }, [state.orgtypecodelist.data, state.humActivities]);

  const recData = get(state.recipients, `data.data`, null);

  const sigAllReceivers = get(
    state.sigAllReceivers,
    'data.data.facet_counts.facet_pivot.transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type',
    null
  );

  const recTableData = getTableData(
    recData,
    `facet_counts.facet_pivot.${pivotKey}`,
    get(state.orgtypecodelist.data, 'data', {}),
    '3'
  );

  const barChartData = getBarChartData(
    get(state.recipients.data, 'data', null),
    get(state.orgtypecodelist.data, 'data', null),
    sigAllReceivers,
    'Humanitarian recipient types',
    `facet_counts.facet_pivot.${pivotKey}`
  );

  return (
    <RecipientsLayout
      barChartData={barChartData}
      tableData={{
        ...baseProviderConfig(props.history),
        data: recTableData,
      }}
    />
  );
}

export const Recipients = withRouter(RecipientsF);
