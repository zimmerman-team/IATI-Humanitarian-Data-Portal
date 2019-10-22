/* eslint-disable react-hooks/exhaustive-deps */
/* core */
import React from 'react';

/* components */
import { OverviewLayout } from 'app/modules/signatory-data/submodules/overview/layout';

/* state & utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { withRouter } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

import { getAllYears } from 'app/modules/signatory-data/submodules/utils';
import {
  barJsonFacet,
  humCallValues,
  activityStatusValues,
} from 'app/modules/signatory-data/submodules/overview/const';
import { getYearBarChartData } from 'app/modules/signatory-data/submodules/overview/utils/getYearBarChartData';
import { getHumanitarianElementsData } from 'app/modules/signatory-data/submodules/overview/utils/getHumanitarianElementsData';
import { getStatusData } from 'app/modules/signatory-data/submodules/overview/utils/getStatusData';
import { getHumActFTSData } from 'app/modules/signatory-data/submodules/overview/utils/getHumActFTSData';
import { getHumActwGBClassificationsData } from 'app/modules/signatory-data/submodules/overview/utils/getHumActwGBClassificationsData';
import { getHumOtherClassOfInterestData } from 'app/modules/signatory-data/submodules/overview/utils/getHumOtherClassOfInterestData';
import { getHumResultsData } from 'app/modules/signatory-data/submodules/overview/utils/getHumResultsData';
import { getHumActWLocationInfoData } from 'app/modules/signatory-data/submodules/overview/utils/getHumActWLocationInfoData';
import { getHumActWMultiYearFundingData } from 'app/modules/signatory-data/submodules/overview/utils/getHumActWMultiYearFundingData';
import { getFinancialReportingData } from 'app/modules/signatory-data/submodules/overview/utils/getFinancialReportingData';
import { getActivitySummaryData } from 'app/modules/signatory-data/submodules/overview/utils/getActivitySummaryData';
import {
  RouteComponentProps,
  WithRouterProps,
  WithRouterStatics,
} from 'react-router';

export function OverviewPage(props) {
  /* local state */
  const [signatory, setSignatory] = React.useState({});

  /* redux store variables */
  let gbsignatories: any = useStoreState(state => state.gbsignatories);
  gbsignatories = get(gbsignatories, 'data', []);

  const sigdataactivityyearsData = useStoreState(
    state => state.sigdataactivityyears.data
  );
  const sigdataactivitiesbyyearData = useStoreState(
    state => state.sigdataactivitiesbyyear.data
  );
  const sigdataactivitystatusData = useStoreState(
    state => state.sigdataactivitystatus.data
  );
  const sigdataoverviewhumData = useStoreState(
    state => state.sigdataoverviewhum.data
  );
  const sigdataoverviewdataerrorsData = useStoreState(
    state => state.sigdataoverviewdataerrors.data
  );
  const tooltipsData = useStoreState(globalState => globalState.tooltips.data);
  /* create the API call instances */
  const sigdataactivitiesbyyearCall = useStoreActions(
    actions => actions.sigdataactivitiesbyyear.fetch
  );
  const sigdataactivitystatusCall = useStoreActions(
    actions => actions.sigdataactivitystatus.fetch
  );
  const sigdataoverviewhumCall = useStoreActions(
    actions => actions.sigdataoverviewhum.fetch
  );
  const sigdataoverviewdataerrorsCall = useStoreActions(
    actions => actions.sigdataoverviewdataerrors.fetch
  );
  const years = getAllYears(
    get(
      sigdataactivityyearsData,
      "data.facet_counts.facet_pivot['activity_date_start_actual,humanitarian']",
      []
    )
  );

  /* componentDidMount call */
  React.useEffect(() => {
    const singlSign = find(gbsignatories, [
      'IATIOrgRef',
      decodeURIComponent(props.match.params.code),
    ]);
    setSignatory(singlSign);

    const sigdataactivitystatuscallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
        'json.facet': JSON.stringify(activityStatusValues),
        rows: 0,
      },
    };
    const sigdataoverviewhumcallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(
          props.match.params.code
        )} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
        'json.facet': JSON.stringify(humCallValues),
        rows: 0,
      },
    };
    const sigdataoverviewdataerrorscallValues = {
      values: {
        q: `publisher_iati_id:${decodeURIComponent(props.match.params.code)}`,
        'json.facet.x': '"unique(iati_identifier)"',
        rows: 0,
      },
    };
    sigdataactivitystatusCall(sigdataactivitystatuscallValues);
    sigdataoverviewhumCall(sigdataoverviewhumcallValues);
    sigdataoverviewdataerrorsCall(sigdataoverviewdataerrorscallValues);
  }, []);

  /* componentDidUpdate based on sigdataactivityyearsData */
  React.useEffect(() => {
    const sigdataactivitiesbyyearcallValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
        'json.facet': JSON.stringify(barJsonFacet(years)),
        rows: 0,
      },
    };
    sigdataactivitiesbyyearCall(sigdataactivitiesbyyearcallValues);
  }, [sigdataactivityyearsData]);

  const yearsData = get(sigdataactivitiesbyyearData, 'data.facets', {});

  /* format data */
  const activityTimelineData = getYearBarChartData(yearsData);
  const humanitarianElementsData = getHumanitarianElementsData(
    get(sigdataoverviewhumData, 'data', [])
  );
  const statusData = getStatusData(
    get(sigdataactivitystatusData, 'data', []),
    get(sigdataoverviewdataerrorsData, 'data', []),
    get(yearsData, 'count', 0),
    tooltipsData
  );
  const activitySummaryData = getActivitySummaryData(
    {
      yearsData,
      humData: get(sigdataoverviewhumData, 'data', []),
    },
    tooltipsData
  );

  const humActFTSData = getHumActFTSData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  const humActwGBClassificationsData = getHumActwGBClassificationsData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  const humOtherClassOfInterestData = getHumOtherClassOfInterestData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  const humResultsData = getHumResultsData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  const humActWLocationInfoData = getHumActWLocationInfoData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  const humActWMultiYearFundData = getHumActWMultiYearFundingData(
    get(sigdataoverviewhumData, 'data', {}),
    tooltipsData
  );
  /* todo: implement this when available in OIPA solr */
  const financialReportingData = getFinancialReportingData(
    get(sigdataactivitystatusData, 'data', {}),
    signatory,
    tooltipsData
  );

  return (
    <OverviewLayout
      statusData={statusData}
      humActFTSData={humActFTSData}
      humResultsData={humResultsData}
      activitySummaryData={activitySummaryData}
      activityTimelineData={activityTimelineData}
      financialReportingData={financialReportingData}
      humActWLocationInfoData={humActWLocationInfoData}
      humanitarianElementsData={humanitarianElementsData}
      humActWMultiYearFundData={humActWMultiYearFundData}
      humOtherClassOfInterestData={humOtherClassOfInterestData}
      humActwGBClassificationsData={humActwGBClassificationsData}
    />
  );
}

export const Overview: React.ComponentClass<
  Omit<RouteComponentProps<any>, keyof RouteComponentProps<any>> &
    WithRouterProps<(props) => any>
> &
  WithRouterStatics<(props) => any> = withRouter(OverviewPage);
