import React, { useEffect } from 'react';
import { SignatoryProgressMock } from './mock';
import { SignatoryProgressLayout } from 'app/modules/signatory-progress/layout';
import useTitle from 'react-use/lib/useTitle';

/* store */
import { signProgStore } from './store';
import { useStoreState } from 'app/state/store/hooks';

/* consts */
import {
  humPubQuery,
  pub202Query,
  pubTracQuery,
  pub203Query,
  baseTable,
} from './const';

/* utils */
import map from 'lodash/map';
import get from 'lodash/get';
import { formatLineChart } from './utils/formatLineChart';
import { formatBarData } from './utils/formatBarData';
import { formatTableData } from './utils/formatTableData';

export function SignatoryProgress() {
  useTitle(`MLT - ${SignatoryProgressMock.title}`);
  const [state, actions] = signProgStore();

  const iatigbsignatoriesData: any = useStoreState(
    globalState => globalState.gbsignatories
  );

  const gbOrgData = get(iatigbsignatoriesData, 'data', []);

  const gbOrgRefs = map(gbOrgData, item => item.IATIOrgRef).join(' ');

  useEffect(() => {
    const repOrgQuery = `reporting_org_ref:(${gbOrgRefs})`;
    humPubQuery.q = `${repOrgQuery} AND `.concat(humPubQuery.q);

    pub202Query.q = `${repOrgQuery} AND `.concat(pub202Query.q);
    pub203Query.q = `${repOrgQuery} AND `.concat(pub203Query.q);
    pubTracQuery.q = `${repOrgQuery} AND `.concat(pubTracQuery.q);

    // here we call the data for humanitarian publishers
    actions.humPublishers.fetch({ values: humPubQuery });

    // and here we call the data for publishers publishing
    // v2.02 data
    actions.publishers202.fetch({ values: pub202Query });

    // and here we call the data for publishers publishing
    // v2.03 data
    actions.publishers203.fetch({ values: pub203Query });

    // and here we call the data for publishers publishing
    // traceability data
    actions.publishersTrac.fetch({ values: pubTracQuery });
  }, []);

  // array for specific publisher data, be it publishers publishing humanitarian,
  // v2.02 data and etc.
  const specPublishers = [
    {
      name: 'Publishing hum. activity data',
      key: 'hum',
      specPub: get(
        state.humPublishers,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
    {
      name: 'Provides granular v2.02 data',
      key: '202',
      specPub: get(
        state.publishers202,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
    {
      name: 'Publishing IATI tracability info',
      key: 'trac',
      specPub: get(
        state.publishersTrac,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
    {
      name: 'Providing granular v2.03 data',
      key: '203',
      specPub: get(
        state.publishers203,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
  ];

  const lineData = formatLineChart(gbOrgData, specPublishers);
  const barData = formatBarData(gbOrgData, specPublishers);
  baseTable.data = formatTableData(gbOrgData, specPublishers);

  return (
    <SignatoryProgressLayout
      title={SignatoryProgressMock.title}
      description={SignatoryProgressMock.description}
      horizontalBarChartCardData={barData}
      lineChartCardData={lineData}
      tableChartData={baseTable}
    />
  );
}
