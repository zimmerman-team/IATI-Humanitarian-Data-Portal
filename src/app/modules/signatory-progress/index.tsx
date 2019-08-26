import React, { useEffect } from 'react';
import { SignatoryProgressMock } from './mock';
import { SignatoryProgressLayout } from 'app/modules/signatory-progress/layout';
import useTitle from 'react-use/lib/useTitle';

/* store */
import { signProgStore } from './store';
import { useStoreState } from 'app/state/store/hooks';

/* consts */
import { humPubQuery, pubQuery } from './const';

/* utils */
import map from 'lodash/map';
import get from 'lodash/get';
import { formatLineChart } from './util';

export function SignatoryProgress() {
  useTitle(`MLT - ${SignatoryProgressMock.title}`);
  const [state, actions] = signProgStore();

  const iatigbsignatoriesData = useStoreState(
    globalState => globalState.gbsignatories
  );

  const gbOrgRefs = map(
    iatigbsignatoriesData.data,
    item => item.IATIOrgRef
  ).join(' ');

  const humPubFacets = get(state.humPublishers, 'data.data.facets', null);

  const pubFacets = get(state.publishers, 'data.data.facets', null);

  useEffect(() => {
    pubQuery.q = `reporting_org_ref:(${gbOrgRefs})`;
    humPubQuery.q = `reporting_org_ref:(${gbOrgRefs}) AND `.concat(
      humPubQuery.q
    );

    // here we call the data for humanitarian publishers
    actions.humPublishers.fetch({ values: humPubQuery });
    // and here we call the data for all publishers
    actions.publishers.fetch({ values: pubQuery });
  }, []);

  formatLineChart(humPubFacets, pubFacets);

  return (
    <SignatoryProgressLayout
      title={SignatoryProgressMock.title}
      description={SignatoryProgressMock.description}
      horizontalBarChartCardData={
        SignatoryProgressMock.horizontalBarChartCardData
      }
      lineChartCardData={SignatoryProgressMock.lineChartCardData}
      tableChartData={SignatoryProgressMock.tableChartData}
    />
  );
}
