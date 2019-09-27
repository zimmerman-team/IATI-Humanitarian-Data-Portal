import React from 'react';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from '../state/store/hooks';

export function InitialDataLoad() {
  const gbsignatoriesData = useStoreState(
    reduxstate => reduxstate.gbsignatories
  );
  const actStatus = useStoreState(reduxstate => reduxstate.actStatus);
  const getActStatus = useStoreActions(actions => actions.actStatus.fetch);
  const getGBSignatories = useStoreActions(
    actions => actions.gbsignatories.fetch
  );

  React.useEffect(() => {
    if (!actStatus.data) {
      getActStatus({});
    }
    if (!gbsignatoriesData.data) {
      getGBSignatories({});
    }
  }, []);
}
