/* core */
import React from 'react';
import { withRouter } from 'react-router-dom';
/* components */
import { OutgoingLayout } from 'app/modules/signatory-data/submodules/outgoing/layout';
/* state & utils */
import get from 'lodash/get';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import {
  outgoingCallFacetValues,
  outgoingCallFacetValuesTrace,
} from 'app/modules/signatory-data/submodules/outgoing/consts';
import { getBarChartData } from 'app/modules/signatory-data/submodules/outgoing/utils/getBarChartData';
import { getOutPledgesListData } from 'app/modules/signatory-data/submodules/outgoing/utils/getOutPledgesListData';
import { getOutCommitmentsListData } from 'app/modules/signatory-data/submodules/outgoing/utils/getOutCommitmentsListData';
import { getOutDisbursementsListData } from 'app/modules/signatory-data/submodules/outgoing/utils/getOutDisbursementsListData';
import { getExpenditureListData } from 'app/modules/signatory-data/submodules/outgoing/utils/getExpenditureListData';
import {
  RouteComponentProps,
  WithRouterProps,
  WithRouterStatics,
} from 'react-router';

export function SignatoryOutgoingPage(props) {
  /* redux store variables */
  const sigdataoutgoingData = useStoreState(
    state => state.sigdataoutgoing.data
  );
  const sigdataoutgoingtraceData = useStoreState(
    state => state.sigdataoutgoingdisbtrace.data
  );
  const tooltipsData = useStoreState(globalState => globalState.tooltips.data);
  /* create the API call instances */
  const sigdataoutgoingCall = useStoreActions(
    action => action.sigdataoutgoing.fetch
  );
  const sigdataoutgoingtraceCall = useStoreActions(
    action => action.sigdataoutgoingdisbtrace.fetch
  );
  /* componentDidMount call */
  React.useEffect(() => {
    const sigdataoutgoingcallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
        'json.facet': JSON.stringify(outgoingCallFacetValues),
        rows: 0,
      },
    };
    sigdataoutgoingCall(sigdataoutgoingcallValues);
    const sigdataoutgoingtracecallValues = {
      values: {
        q: 'transaction_receiver_org_receiver_activity_id:*',
        fq: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
        'json.facet': JSON.stringify(outgoingCallFacetValuesTrace),
        rows: 0,
      },
    };
    sigdataoutgoingtraceCall(sigdataoutgoingtracecallValues);
  }, []);
  return (
    <OutgoingLayout
      lists={[
        getOutPledgesListData(
          get(sigdataoutgoingData, 'data.facets', {}),
          tooltipsData
        ),
        getOutCommitmentsListData(
          get(sigdataoutgoingData, 'data.facets', {}),
          tooltipsData
        ),
        getOutDisbursementsListData(
          get(sigdataoutgoingData, 'data.facets', {}),
          get(sigdataoutgoingtraceData, 'data.facets', {}),
          tooltipsData
        ),
        getExpenditureListData(
          get(sigdataoutgoingData, 'data.facets', {}),
          tooltipsData
        ),
      ]}
      horizontalBarChartCardData={getBarChartData(
        get(sigdataoutgoingData, 'data.facets', {})
      )}
    />
  );
}
export const SignatoryOutgoing: React.ComponentClass<
  Omit<RouteComponentProps<any>, keyof RouteComponentProps<any>> &
    WithRouterProps<(props) => any>
> &
  WithRouterStatics<(props) => any> = withRouter(SignatoryOutgoingPage);
