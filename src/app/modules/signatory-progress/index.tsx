import React, { useEffect } from 'react';
import { SignatoryProgressMock } from './mock';
import { SignatoryProgressLayout } from 'app/modules/signatory-progress/layout';
import useTitle from 'react-use/lib/useTitle';

/* store */
import { signProgStore } from './store';
import { useStoreState } from 'app/state/store/hooks';

/* consts */
import { humPubQuery, pubQuery } from './const';

export function SignatoryProgress() {
  useTitle(`MLT - ${SignatoryProgressMock.title}`);
  const [state, actions] = signProgStore();

  const iatigbsignatoriesData = useStoreState(
    globalState => globalState.gbsignatories
  );

  let gbOrgRefs = iatigbsignatoriesData.data
    ? iatigbsignatoriesData.data.map(item => item.IATIOrgRef)
    : [];

  console.log('state.humPublishers.data', state.humPublishers.data);
  console.log('state.publishers.data', state.publishers.data);
  console.log('iatigbsignatoriesData', iatigbsignatoriesData);

  useEffect(() => {
    // here we call the data for humanitarian publishers
    actions.humPublishers.fetch({ values: humPubQuery });
    // and here we call the data for all publishers
    actions.publishers.fetch({ values: pubQuery });
  }, []);

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
