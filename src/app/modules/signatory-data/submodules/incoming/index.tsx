/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { IncomingLayout } from 'app/modules/signatory-data/submodules/incoming/layout';
/* state & utils */
import get from 'lodash/get';
import {
  incomingCallFacetValues,
  incomingTransactionsValues,
  inPageNavigationItems,
} from 'app/modules/signatory-data/submodules/incoming/consts';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { getIncFundsListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncFundsListData';
import { getIncCommitmentsListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncCommitmentsListData';
import { getIncPledgesListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncPledgesListData';
import { getBarChartData } from 'app/modules/signatory-data/submodules/incoming/utils/getBarChartData';
import {
  RouteComponentProps,
  WithRouterProps,
  WithRouterStatics,
} from 'react-router';

function SignatoryIncomingPage(props) {
  /* redux store variables */
  const sigdataincomingData = useStoreState(
    state => state.sigdataincoming.data
  );
  const sigdataincomingtraceData = useStoreState(
    state => state.sigdataincomingfundtrace.data
  );
  const sigdataincomingtransactionsData = useStoreState(
    state => state.sigdataincomingtransactions.data
  );
  const tooltipsData = useStoreState(globalState => globalState.tooltips.data);
  /* create the API call instances */
  const sigdataincomingCall = useStoreActions(
    state => state.sigdataincoming.fetch
  );
  const sigdataincomingtransactionsCall = useStoreActions(
    state => state.sigdataincomingtransactions.fetch
  );
  /* componentDidMount call */
  React.useEffect(() => {
    const sigdataincomingcallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
        'json.facet': JSON.stringify(incomingCallFacetValues),
        rows: 0,
      },
    };
    sigdataincomingCall(sigdataincomingcallValues);
    const sigdataincomingtransactionscallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
        'json.facet': JSON.stringify(incomingTransactionsValues),
        rows: 0,
      },
    };
    sigdataincomingtransactionsCall(sigdataincomingtransactionscallValues);
  }, []);

  return (
    <IncomingLayout
      lists={[
        getIncPledgesListData(
          get(sigdataincomingData, 'data.facets', {}),
          get(sigdataincomingtransactionsData, 'data.facets', {}),
          tooltipsData
        ),
        getIncCommitmentsListData(
          get(sigdataincomingData, 'data.facets', {}),
          get(sigdataincomingtransactionsData, 'data.facets', {}),
          tooltipsData
        ),
        getIncFundsListData(
          get(sigdataincomingData, 'data.facets', {}),
          get(sigdataincomingtraceData, 'data.facets', {}),
          get(sigdataincomingtransactionsData, 'data.facets', {}),
          tooltipsData
        ),
      ]}
      inPageNavigation={inPageNavigationItems}
      horizontalBarChartCardData={getBarChartData(
        get(sigdataincomingData, 'data.facets', {})
      )}
    />
  );
}

export const SignatoryIncoming: React.ComponentClass<
  Omit<RouteComponentProps<any>, keyof RouteComponentProps<any>> &
    WithRouterProps<(props) => any>
> &
  WithRouterStatics<(props) => any> = withRouter(SignatoryIncomingPage);
