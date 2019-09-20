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

export function ProvidersPageFunc(props) {
  /* component store */
  const [state, actions] = sigDataProvidersStore();
  /* componentDidMount call */
  React.useEffect(() => {
    actions.orgtypecodelist.fetch({});
    actions.sigAllProviders.fetch({
      values: allProvidersQuery(
        decodeURIComponent(props.match.params.code),
        'transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type'
      ),
    });
    actions.humanitarianActivities.fetch({
      values: {
        q: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (transaction_provider_org_narrative:* OR transaction_provider_org_ref:*) AND (humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])))`,
        fl: 'iati_identifier',
        rows: 100000,
      },
    });
  }, []);
  React.useEffect(() => {
    actions.sigdataproviders.fetch({
      values: providersTableCallValues(
        decodeURIComponent(props.match.params.code),
        get(state.humanitarianActivities.data, 'data.response.docs', [])
      ),
    });
  }, [state.orgtypecodelist.data, state.humanitarianActivities.data]);

  const sigAllProviders = get(
    state.sigAllProviders,
    'data.data.facet_counts.facet_pivot.transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type',
    null
  );

  const tableData = getTableData(
    get(state.sigdataproviders.data, 'data', {}),
    'facet_counts.facet_pivot["transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_type,transaction_value_currency"]',
    get(state.orgtypecodelist.data, 'data', {}),
    '1'
  );
  return (
    <ProvidersPageLayout
      barChartData={getBarChartData(
        get(state.sigdataproviders.data, 'data', null),
        get(state.orgtypecodelist.data, 'data', null),
        sigAllProviders,
        'Humanitarian providers breakdown',
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
