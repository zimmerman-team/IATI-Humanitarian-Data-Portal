import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from 'app/modules/signatory-data/submodules/recipients/layout';

/* store */
import { recStore } from 'app/modules/signatory-data/submodules/recipients/store';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* consts */
import { recipientsQuery } from 'app/modules/signatory-data/submodules/recipients/const';
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
    // so we call table data here
    actions.recipients.fetch({
      values: recipientsQuery(decodeURIComponent(props.match.params.code)),
    });
  }, [orgTypeNames]);

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
    'Recipient OrganisationTypes',
    `facet_counts.facet_pivot.${pivotKey}`
  );

  const sigDataActivityListFilterAction = useStoreActions(
    actionsGen => actionsGen.sigDataActivityListFilter.setActivityListFilter
  );

  const onItemClick = value => {
    sigDataActivityListFilterAction(value);
    props.history.push('activity-list');
  };

  return (
    <RecipientsLayout
      barChartData={barChartData}
      tableData={{
        ...baseProviderConfig(false, onItemClick),
        data: recTableData,
      }}
      loading={
        state.recipients.loading ||
        state.humRecTypes.loading ||
        state.sigAllReceivers.loading
      }
    />
  );
}

//cc:look into issue TS2451
export const Recipients = withRouter(RecipientsF);
