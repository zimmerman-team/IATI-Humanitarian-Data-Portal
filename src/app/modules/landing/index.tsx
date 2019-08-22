/* core */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';

/* components */
import { LandingLayout } from 'app/modules/landing/layout';

/* state & utils */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { getStatsFromApiResponses } from 'app/modules/landing/utils';

/* mock */
import { humanitarianCallValues } from 'app/modules/landing/mock';

export function Landing() {
  useTitle(`MLT - Home`);
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);
  /* create the API call instances */
  const humanitarianCall = useStoreActions(
    actions => actions.humanitarian.fetch
  );
  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    humanitarianCall(humanitarianCallValues);
  }, [gbsignatoriesData]);
  const humanitarianData = useStoreState(state => state.humanitarian);

  return (
    <LandingLayout
      stats={getStatsFromApiResponses(humanitarianData, gbsignatoriesData)}
    />
  );
}
