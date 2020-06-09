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
  useTitle(`IATI Humanitarian Data Portal - Home`);
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);
  const humanitarianData = useStoreState(state => state.humanitarian.data);
  const humanitarianLoading = useStoreState(
    state => state.humanitarian.loading
  );
  const humanitarianLoaded = useStoreState(state => state.humanitarian.success);

  /* create the API call instances */
  const humanitarianCall = useStoreActions(
    actions => actions.humanitarian.fetch
  );

  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    if (!humanitarianLoading && !humanitarianLoaded) {
      humanitarianCall(humanitarianCallValues);
    }
  }, [gbsignatoriesData]);

  return (
    <LandingLayout
      stats={getStatsFromApiResponses(humanitarianData, gbsignatoriesData)}
    />
  );
}
