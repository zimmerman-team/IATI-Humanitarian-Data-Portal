/* core */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';

/* components */
import { LandingLayout } from 'app/modules/landing/layout';

/* state & utils */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { getStatsFromApiResponses } from 'app/modules/landing/utils';

/* mock */
import {
  humanitarianCallValues,
  gbsignatoriesCallValues,
} from 'app/modules/landing/mock';

export function Landing() {
  useTitle(`MLT - Home`);
  /* create the API call instances */
  const humanitarianCall = useStoreActions(
    actions => actions.humanitarian.fetch
  );
  const gbsignatoriesCall = useStoreActions(
    actions => actions.gbsignatories.fetch
  );
  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    humanitarianCall(humanitarianCallValues);
    gbsignatoriesCall(gbsignatoriesCallValues);
  }, [humanitarianCall, gbsignatoriesCall]);
  const humanitarianData = useStoreState(state => state.humanitarian);
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);

  return (
    <LandingLayout
      stats={getStatsFromApiResponses(humanitarianData, gbsignatoriesData)}
    />
  );
}
