import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from 'app/modules/signatory-data/submodules/recipients/layout';

/* store */
import { recStore } from 'app/modules/signatory-data/submodules/recipients/store';
import { useStoreState } from 'app/state/store/hooks';

/* consts */
import {
  humActQuery,
  recipientsQuery,
} from 'app/modules/signatory-data/submodules/recipients/const';
import { pivotKey } from 'app/modules/signatory-data/submodules/recipients/store/interfaces';
import {
  allProvidersQuery,
  baseProviderConfig,
} from 'app/modules/signatory-data/submodules/providersPage/consts';

/* utils */
import get from 'lodash/get';
import { getBarChartData } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';
import { getTableData } from 'app/modules/signatory-data/submodules/providersPage/utils/getTableData';

function RecipientsF(props) {
  const [state, actions] = recStore();
  const orgTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.orgTypeNames.data
  );
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
  }, [orgTypeNames, state.humActivities]);

  const recData = get(state.recipients, `data.data`, null);

  const sigAllReceivers = get(
    state.sigAllReceivers,
    'data.data.facet_counts.facet_pivot.transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type',
    null
  );

  const recTableData = getTableData(
    recData,
    `facet_counts.facet_pivot.${pivotKey}`,
    get(orgTypeNames, 'data', {}),
    '3'
  );

  const barChartData = getBarChartData(
    get(state.recipients.data, 'data', null),
    get(orgTypeNames, 'data', null),
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
