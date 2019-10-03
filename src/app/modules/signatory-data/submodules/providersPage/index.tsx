/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
/* state & utils */
import get from 'lodash/get';
import { sigDataProvidersStore } from 'app/modules/signatory-data/submodules/providersPage/store';
import {
  allProvidersQuery,
  baseProviderConfig,
  providersTableCallValues,
} from 'app/modules/signatory-data/submodules/providersPage/consts';
import { getTableData } from 'app/modules/signatory-data/submodules/providersPage/utils/getTableData';
import { getBarChartData } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';
import { useStoreState } from 'easy-peasy';

export function ProvidersPageFunc(props) {
  /* component store */
  const [state, actions] = sigDataProvidersStore();

  const orgTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.orgTypeNames
  );
  /* componentDidMount call */
  React.useEffect(() => {
    actions.sigAllProviders.fetch({
      values: allProvidersQuery(
        decodeURIComponent(props.match.params.code),
        'transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type'
      ),
    });
  }, []);
  React.useEffect(() => {
    actions.sigdataproviders.fetch({
      values: providersTableCallValues(
        decodeURIComponent(props.match.params.code)
      ),
    });
  }, [orgTypeNames.data]);

  const sigAllProviders = get(
    state.sigAllProviders,
    'data.data.facet_counts.facet_pivot.transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type',
    null
  );

  const tableData = getTableData(
    get(state.sigdataproviders.data, 'data', {}),
    'facet_counts.facet_pivot["transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_type,transaction_value_currency"]',
    get(orgTypeNames.data, 'data', {}),
    '1'
  );
  return (
    <ProvidersPageLayout
      barChartData={getBarChartData(
        get(state.sigdataproviders.data, 'data', null),
        get(orgTypeNames.data, 'data', null),
        sigAllProviders,
        'Funding organisation types',
        `facet_counts.facet_pivot.transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_type,transaction_value_currency`
      )}
      tableData={{
        ...baseProviderConfig(props.history),
        data: tableData,
      }}
    />
  );
}

export const ProvidersPage = withRouter(ProvidersPageFunc);
