/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStoreActions } from 'app/state/store/hooks';
/* components */
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
import { CustomFooter } from 'app/modules/signatory-data/submodules/providersPage/common/CustomFooter';
/* state & utils */
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import 'styled-components/macro';
import { sigDataProvidersStore } from 'app/modules/signatory-data/submodules/providersPage/store';
import {
  allProvidersQuery,
  baseProviderConfig,
  providersTableCallValues,
} from 'app/modules/signatory-data/submodules/providersPage/consts';
import { getTableData } from 'app/modules/signatory-data/submodules/providersPage/utils/getTableData';
import { getBarChartData1 } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';
import { useStoreState } from 'easy-peasy';
import {
  RouteComponentProps,
  WithRouterProps,
  WithRouterStatics,
} from 'react-router';

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
        'transaction_provider_org_type,transaction_provider_org_narrative'
      ),
    });
  }, []);

  const [facetOffset, setFacetOffset] = React.useState(0);

  React.useEffect(() => {
    actions.sigdataproviders.fetch({
      values: providersTableCallValues(
        decodeURIComponent(props.match.params.code),
        facetOffset
      ),
    });
  }, [orgTypeNames.data, facetOffset]);

  const sigDataActivityListFilterAction = useStoreActions(
    actionsGen => actionsGen.sigDataActivityListFilter.setActivityListFilter
  );
  const onItemClick = value => {
    sigDataActivityListFilterAction(value);
    props.history.push('activity-list');
  };

  const sigAllProviders = get(
    state.sigAllProviders,
    'data.data.facet_counts.facet_pivot.transaction_provider_org_type,transaction_provider_org_narrative',
    null
  );

  const tableData = getTableData(
    get(state.sigdataproviders.data, 'data', {}),
    'facet_counts.facet_pivot["transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_type,transaction_value_currency"]',
    get(orgTypeNames.data, 'data', {}),
    '1'
  );

  const barChartData = getBarChartData1(
    get(orgTypeNames.data, 'data', null),
    sigAllProviders,
    'Funder Organisation Types'
  );

  const tableDataConfig = baseProviderConfig(false, onItemClick);

  return (
    <ProvidersPageLayout
      barChartData={barChartData}
      tableData={{
        ...tableDataConfig,
        options: {
          ...tableDataConfig.options,
          customFooter: () => (
            <CustomFooter
              facetOffset={facetOffset}
              setFacetOffset={setFacetOffset}
              nextEnabled={uniq(tableData.map(item => item[0])).length > 9}
            />
          ),
          rowsPerPage: 100,
        },
        data: tableData,
      }}
      loading={state.sigdataproviders.loading || state.sigAllProviders.loading}
    />
  );
}

export const ProvidersPage: React.ComponentClass<
  Omit<RouteComponentProps<any>, keyof RouteComponentProps<any>> &
    WithRouterProps<(props) => any>
> &
  WithRouterStatics<(props) => any> = withRouter(ProvidersPageFunc);
