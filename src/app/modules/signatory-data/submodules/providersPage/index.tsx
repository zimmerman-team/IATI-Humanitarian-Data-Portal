/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
/* state & utils */
import get from 'lodash/get';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { mockData } from './mock';
import { providersTypesCallValues } from 'app/modules/signatory-data/submodules/providersPage/consts';
import { getBarChartData } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';

export function ProvidersPageFunc(props) {
  /* redux store variables */
  const orgtypecodelistData = useStoreState(
    state => state.orgtypecodelist.data
  );
  const sigdataproviderstypesData = useStoreState(
    state => state.sigdataproviderstypes.data
  );
  /* create the API call instances */
  const orgtypecodelistCall = useStoreActions(
    state => state.orgtypecodelist.fetch
  );
  const sigdataproviderstypesCall = useStoreActions(
    state => state.sigdataproviderstypes.fetch
  );
  /* componentDidMount call */
  React.useEffect(() => {
    orgtypecodelistCall({});
  }, []);
  React.useEffect(() => {
    const callValues = {
      values: {
        q: `reporting_org_ref:${props.match.params.code}`,
        'json.facet': JSON.stringify(providersTypesCallValues),
        rows: 0,
      },
    };
    sigdataproviderstypesCall(callValues);
  }, [orgtypecodelistData]);
  return (
    <ProvidersPageLayout
      activity={mockData.activity}
      barChartData={getBarChartData(
        get(sigdataproviderstypesData, 'data', {}),
        get(orgtypecodelistData, 'data', {})
      )}
      tableData={mockData.tableData}
    />
  );
}

export const ProvidersPage = withRouter(ProvidersPageFunc);
