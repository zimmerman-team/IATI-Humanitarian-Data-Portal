/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { IncomingLayout } from './layout';
/* state & utils */
import get from 'lodash/get';
import { incomingCallFacetValues, inPageNavigationItems } from './consts';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { getIncFundsListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncFundsListData';
import { getIncCommitmentsListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncCommitmentsListData';
import { getIncPledgesListData } from 'app/modules/signatory-data/submodules/incoming/utils/getIncPledgesListData';
import { getBarChartData } from 'app/modules/signatory-data/submodules/incoming/utils/getBarChartData';

function SignatoryIncomingPage(props) {
  /* redux store variables */
  const sigdataincomingData = useStoreState(
    state => state.sigdataincoming.data
  );
  /* create the API call instances */
  const sigdataincomingCall = useStoreActions(
    state => state.sigdataincoming.fetch
  );
  /* componentDidMount call */
  React.useEffect(() => {
    const sigdataincomingcallValues = {
      values: {
        q: `(reporting_org_ref:${props.match.params.code} AND (humanitarian:1 OR transaction_humanitarian:1))`,
        'json.facet': JSON.stringify(incomingCallFacetValues),
        rows: 0,
      },
    };
    sigdataincomingCall(sigdataincomingcallValues);
  }, []);
  return (
    <IncomingLayout
      lists={[
        getIncPledgesListData(get(sigdataincomingData, 'data.facets', {})),
        getIncCommitmentsListData(get(sigdataincomingData, 'data.facets', {})),
        getIncFundsListData(get(sigdataincomingData, 'data.facets', {})),
      ]}
      inPageNavigation={inPageNavigationItems}
      horizontalBarChartCardData={getBarChartData(
        get(sigdataincomingData, 'data.facets', {})
      )}
    />
  );
}

export const SignatoryIncoming = withRouter(SignatoryIncomingPage);
