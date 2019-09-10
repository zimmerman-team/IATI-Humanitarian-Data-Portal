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
import { signatoryDataMock, iatigbsignatoriesCallValues } from './mock';
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

  const signatories = formatTableSignatories(
    get(
      get(iatigbsignatoriesData, 'data.data', []),
      'facet_counts.facet_pivot["reporting_org_ref,reporting_org_type_code,dataset_iati_version,humanitarian,transaction_type,transaction_provider_org_ref"]',
      []
    ),
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
