/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
/* state & utils */
import get from 'lodash/get';
import { sigDataProvidersStore } from 'app/modules/signatory-data/submodules/providersPage/store';
import {
  baseProviderConfig,
  providersTypesCallValues,
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
  }, []);
  React.useEffect(() => {
    actions.sigdataproviderstypes.fetch({
      values: {
        q: `(reporting_org_ref:${props.match.params.code} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999])))`,
        'json.facet': JSON.stringify(providersTypesCallValues),
        rows: 0,
      },
    });
    actions.sigdataproviders.fetch({
      values: providersTableCallValues(props.match.params.code),
    });
  }, [state.orgtypecodelist.data]);

  const tableData = getTableData(
    get(state.sigdataproviders.data, 'data', {}),
    get(state.orgtypecodelist.data, 'data', {})
  );
  return (
    <ProvidersPageLayout
      barChartData={getBarChartData(
        get(state.sigdataproviderstypes.data, 'data', {}),
        get(state.orgtypecodelist.data, 'data', {})
      )}
      tableData={{
        ...baseProviderConfig,
        data: tableData.data,
        expandableData: tableData.expData,
      }}
    />
  );
}

export const ProvidersPage = withRouter(ProvidersPageFunc);
