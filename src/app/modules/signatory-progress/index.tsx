import React, { useEffect } from 'react';
import { SignatoryProgressMock } from 'app/modules/signatory-progress/mock';
import { SignatoryProgressLayout } from 'app/modules/signatory-progress/layout';
import useTitle from 'react-use/lib/useTitle';

/* store */
import { signProgStore } from 'app/modules/signatory-progress/store';
import { useStoreState } from 'app/state/store/hooks';

/* consts */
import {
  humPubQuery,
  pub202Query,
  pubTracQuery,
  pub203Query,
  getBaseTable,
  use202OrLaterQuery,
} from './const';

/* utils */
import map from 'lodash/map';
import get from 'lodash/get';
import { formatLineChart } from 'app/modules/signatory-progress/utils/formatLineChart';
import { formatBarData } from 'app/modules/signatory-progress/utils/formatBarData';
import { formatTableData } from 'app/modules/signatory-progress/utils/formatTableData';

export function SignatoryProgress() {
  useTitle(`IATI Humanitarian Data Portal - ${SignatoryProgressMock.title}`);
  const [state, actions] = signProgStore();

  const iatigbsignatoriesData: any = useStoreState(
    globalState => globalState.gbsignatories
  );
  const tooltipsData: any = useStoreState(
    globalState => globalState.tooltips.data
  );
  const signatoryProgressData: any = useStoreState(
    globalState => globalState.signatoryProgress.data
  );
  const signatoryProgressDataLoading: any = useStoreState(
    globalState => globalState.signatoryProgress.loading
  );

  const gbOrgData = map(iatigbsignatoriesData.data, sig => ({
    ...sig,
    IATIOrgRef: sig.IATIOrgRef.toLowerCase(),
  }));

  const gbOrgRefs =
    gbOrgData && map(gbOrgData, item => item.IATIOrgRef).join(' ');

  useEffect(() => {
    if (gbOrgRefs) {
      const repOrgQuery = `reporting_org_ref:(${gbOrgRefs})`;
      humPubQuery.q = `${repOrgQuery} AND `.concat(humPubQuery.q);
      use202OrLaterQuery.q = `${repOrgQuery} AND `.concat(use202OrLaterQuery.q);
      pub202Query.q = `${repOrgQuery} AND `.concat(pub202Query.q);
      pub203Query.q = `${repOrgQuery} AND `.concat(pub203Query.q);
      pubTracQuery.q = `${repOrgQuery} AND `.concat(pubTracQuery.q);

      // here we call the data for humanitarian publishers
      actions.humPublishers.fetch({ values: humPubQuery });

      // here we call the data for orgs publishing 2.02 or later version
      actions.use202OrLater.fetch({
        values: use202OrLaterQuery,
      });

      // and here we call the data for publishers publishing
      // v2.02 data
      actions.publishers202.fetch({ values: pub202Query });

      // and here we call the data for publishers publishing
      // v2.03 data
      actions.publishers203.fetch({ values: pub203Query });

      // and here we call the data for publishers publishing
      // traceability data
      actions.publishersTrac.fetch({ values: pubTracQuery });
    }
  }, [iatigbsignatoriesData.data]);

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
      name: 'Organisations using v2.02 or later of the IATI Standard',
      key: '202OrLater',
      specPub: get(
        state.use202OrLater,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
    {
      name: 'Providing granular v2.02 data',
      key: '202',
      specPub: get(
        state.publishers202,
        'data.data.facets.org_refs.buckets',
        null
      ),
    },
    {
      name: 'Publishing IATI traceability info',
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

  const lineData = formatLineChart(
    gbOrgData,
    specPublishers,
    signatoryProgressData
  );
  const barData = formatBarData(gbOrgData, specPublishers);
  const baseTable = getBaseTable(tooltipsData, signatoryProgressData);
  baseTable.data = formatTableData(
    gbOrgData,
    specPublishers,
    signatoryProgressData
  ) as never;

  return (
    <SignatoryProgressLayout
      loading={iatigbsignatoriesData.loading || signatoryProgressDataLoading}
      title={SignatoryProgressMock.title}
      description={SignatoryProgressMock.description}
      horizontalBarChartCardData={barData}
      lineChartCardData={lineData}
      tableChartData={baseTable}
    />
  );
}
