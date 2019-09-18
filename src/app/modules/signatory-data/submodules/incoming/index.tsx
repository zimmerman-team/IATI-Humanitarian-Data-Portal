/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { IncomingLayout } from './layout';
/* state & utils */
import get from 'lodash/get';
import {
  incomingCallFacetValues,
  incomingCallFacetValuesTrace,
  inPageNavigationItems,
} from './consts';
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
  const sigdataincomingtraceData = useStoreState(
    state => state.sigdataincomingfundtrace.data
  );
  /* create the API call instances */
  const sigdataincomingCall = useStoreActions(
    state => state.sigdataincoming.fetch
  );
  const sigdataincomingtraceCall = useStoreActions(
    state => state.sigdataincomingfundtrace.fetch
  );
  /* componentDidMount call */
  React.useEffect(() => {
    const sigdataincomingcallValues = {
      values: {
        q: `(reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999])))`,
        'json.facet': JSON.stringify(incomingCallFacetValues),
        rows: 0,
      },
    };
    sigdataincomingCall(sigdataincomingcallValues);
    const sigdataincomingtracecallValues = {
      values: {
        q: 'transaction_provider_org_provider_activity_id:*',
        fq: `(reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999])))`,
        'json.facet': JSON.stringify(incomingCallFacetValuesTrace),
        rows: 0,
      },
    };
    sigdataincomingtraceCall(sigdataincomingtracecallValues);
  }, []);

  return (
    <IncomingLayout
      lists={[
        getIncPledgesListData(get(sigdataincomingData, 'data.facets', {})),
        getIncCommitmentsListData(get(sigdataincomingData, 'data.facets', {})),
        getIncFundsListData(
          get(sigdataincomingData, 'data.facets', {}),
          get(sigdataincomingtraceData, 'data.facets', {})
        ),
      ]}
      inPageNavigation={inPageNavigationItems}
      horizontalBarChartCardData={getBarChartData(
        get(sigdataincomingData, 'data.facets', {})
      )}
    />
  );
}

export const SignatoryIncoming = withRouter(SignatoryIncomingPage);
