/* core */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';

/* components */
import { SignatoryDataLayout } from 'app/modules/signatory-data/layout';

/* state & utils */
import get from 'lodash/get';
import map from 'lodash/map';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* mock */
import { signatoryDataMock, iatigbsignatoriesCallValues, helloTesting } from './mock';
import { formatTableSignatories } from 'app/modules/signatory-data/utils';

export function SignatoryData() {
  useTitle(`MLT - ${signatoryDataMock.title}`);
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);
  const iatigbsignatoriesData = useStoreState(state => state.iatigbsignatories);
  /* create the API call instances */
  const iatigbsignatoriesCall = useStoreActions(
    actions => actions.iatigbsignatories.fetch
  );
  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    const publishers = map(get(gbsignatoriesData, 'data', []), sig =>
      get(sig, 'IATIOrgRef', '')
    ).join(' ');
    const callValues = {
      values: {
        ...iatigbsignatoriesCallValues.values,
        q: `reporting_org_ref:(${publishers})`,
      },
    };
    iatigbsignatoriesCall(callValues);
  }, [gbsignatoriesData]);

  React.useEffect(() => {
    const publishers = map(get(gbsignatoriesData, 'data', []), sig =>
      get(sig, 'IATIOrgRef', '')
    ).join(' ');
    const callValues = {
      values: {
        ...helloTesting.values,
        q: `reporting_org_ref:(${publishers})`,
      },
    };
    iatigbsignatoriesCall(callValues);
  }, )

  const signatories = formatTableSignatories(
    get(iatigbsignatoriesData, 'data.data.facets.iati_orgs.buckets', []),
    get(gbsignatoriesData, 'data', [])
  );
  return (
    <SignatoryDataLayout
      signatories={signatories}
      title={signatoryDataMock.title}
      description={signatoryDataMock.description}
      loading={gbsignatoriesData.loading || iatigbsignatoriesData.loading}
    />
  );
}
