/* core */
import React from 'react';

/* components */
import { OverviewLayout } from './layout';

/* state & utils */
import get from 'lodash/get';
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
        q: `reporting_org_ref:${props.match.params.code} AND (humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999]))`,
        'json.facet': JSON.stringify(humCallValues),
        rows: 0,
      },
    };
    sigdataactivitystatusCall(sigdataactivitystatuscallValues);
    sigdataoverviewhumCall(sigdataoverviewhumcallValues);
  }, []);

  /* componentDidUpdate based on sigdataactivityyearsData */
  React.useEffect(() => {
    const sigdataactivitiesbyyearcallValues = {
      values: {
        q: `reporting_org_ref:${props.match.params.code}`,
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
  const statusData = getStatusData(get(sigdataactivitystatusData, 'data', []));
  const activitySummaryData = getActivitySummaryData({
    yearsData,
    humData: get(sigdataoverviewhumData, 'data', []),
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
