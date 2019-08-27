/* core */
import React from 'react';

/* components */
import { OverviewLayout } from './layout';

/* state & utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { withRouter } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

import { getAllYears } from 'app/modules/signatory-data/submodules/utils';
import {
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

export function OverviewPage(props) {
  /* redux store variables */
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
  const years = getAllYears(
    get(
      sigdataactivityyearsData,
      "data.facet_counts.facet_pivot['activity_date_iso_date,humanitarian']",
      []
    )
  );

  /* componentDidMount call */
  React.useEffect(() => {
    const sigdataactivitystatuscallValues = {
      values: {
        q: `reporting_org_ref:${props.match.params.code}`,
        'json.facet': JSON.stringify(activityStatusValues),
        rows: 0,
      },
    };
    const sigdataoverviewhumcallValues = {
      values: {
        q: `(reporting_org_ref:${props.match.params.code} AND (humanitarian:1 OR transaction_humanitarian:1))`,
        'json.facet': JSON.stringify(humCallValues),
        rows: 0,
      },
    };
    sigdataactivitystatusCall(sigdataactivitystatuscallValues);
    sigdataoverviewhumCall(sigdataoverviewhumcallValues);
  }, []);

  /* componentDidUpdate based on sigdataactivityyearsData */
  React.useEffect(() => {
    const yearsQueryString = years
      .map(
        (y, index) =>
          `${
            index > 0 ? 'facet.query=' : ''
          }{!tag=q1}activity_date_iso_date:[${y}-01-01T00:00:00Z TO ${y}-12-31T24:00:00Z]`
      )
      .join('&');
    const sigdataactivitiesbyyearcallValues = {
      values: `q=reporting_org_ref:${props.match.params.code}&facet.query=${yearsQueryString}&facet.pivot={!query=q1}humanitarian&facet=on&fl=facet_counts`,
    };
    sigdataactivitiesbyyearCall(sigdataactivitiesbyyearcallValues);
  }, [sigdataactivityyearsData]);

  const yearsData = get(
    sigdataactivitiesbyyearData,
    'data.facet_counts.facet_pivot.humanitarian',
    []
  );

  /* format data */
  const activityTimelineData = getYearBarChartData(yearsData, years);
  const humActCount = get(find(yearsData, { value: '1' }), 'count', 0);
  const humanitarianElementsData = getHumanitarianElementsData(
    get(sigdataoverviewhumData, 'data', []),
    humActCount
  );
  const statusData = getStatusData(get(sigdataactivitystatusData, 'data', []));
  const activitySummaryData = getActivitySummaryData({
    yearsData,
    currentHumActData: get(sigdataactivitystatusData, 'data', []),
  });
  const humActFTSData = getHumActFTSData(
    get(sigdataoverviewhumData, 'data', {})
  );
  const humActwGBClassificationsData = getHumActwGBClassificationsData(
    get(sigdataoverviewhumData, 'data', {})
  );
  const humOtherClassOfInterestData = getHumOtherClassOfInterestData(
    get(sigdataoverviewhumData, 'data', {})
  );
  const humResultsData = getHumResultsData(
    get(sigdataoverviewhumData, 'data', {})
  );
  const humActWLocationInfoData = getHumActWLocationInfoData(
    get(sigdataoverviewhumData, 'data', {})
  );
  const humActWMultiYearFundData = getHumActWMultiYearFundingData(
    get(sigdataoverviewhumData, 'data', {})
  );
  /* todo: implement this when available in OIPA solr */
  const financialReportingData = getFinancialReportingData(
    get(sigdataactivitystatusData, 'data', {})
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

export const Overview = withRouter(OverviewPage);
