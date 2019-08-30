/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
/* state & utils */
import get from 'lodash/get';
import { mockData } from './mock';
import { sigDataProvidersStore } from 'app/modules/signatory-data/submodules/providersPage/store';
import { providersTypesCallValues } from 'app/modules/signatory-data/submodules/providersPage/consts';
import { getBarChartData } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';

export function ProvidersPageFunc(props) {
  /* component store */
  const [state, actions] = sigDataProvidersStore();
  /* componentDidMount call */
  React.useEffect(() => {
    actions.orgtypecodelist.fetch({});
  }, []);
  React.useEffect(() => {
    actions.sigdataproviderstypes.fetch({
      values: {
        q: `reporting_org_ref:${props.match.params.code}`,
        'json.facet': JSON.stringify(providersTypesCallValues),
        rows: 0,
      },
    });
  }, [state.orgtypecodelist.data]);
  return (
    <ProvidersPageLayout
      activity={mockData.activity}
      barChartData={getBarChartData(
        get(state.sigdataproviderstypes.data, 'data', {}),
        get(state.orgtypecodelist.data, 'data', {})
      )}
      tableData={mockData.tableData}
    />
  );
}

export const ProvidersPage = withRouter(ProvidersPageFunc);
