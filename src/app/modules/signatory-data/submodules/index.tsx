/* core */
import React from 'react';
import { Container } from '@material-ui/core';

/* components */
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';
import { SignatoryDataRoutes } from 'app/modules/signatory-data/submodules/routes';

/* state & utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { getYearRange } from 'app/modules/signatory-data/submodules/utils';

export function SubmoduleContainer(props) {
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);
  const sigdataactivityyearsData = useStoreState(
    state => state.sigdataactivityyears.data
  );
  const orgDetails = find(gbsignatoriesData.data as any, {
    IATIOrgRef: decodeURIComponent(props.match.params.code),
  });
  /* create the API call instances */
  const sigdataactivityyearsCall = useStoreActions(
    actions => actions.sigdataactivityyears.fetch
  );
  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    const callValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
        facet: 'on',
        'facet.pivot': 'activity_date_iso_date,humanitarian',
        fl: 'facet_counts',
      },
    };
    sigdataactivityyearsCall(callValues);
  }, [gbsignatoriesData, props.match.params.code, sigdataactivityyearsCall]);

  let suppLink = get(orgDetails, 'suppInfoUrl', 'no url provided');
  suppLink =
    suppLink.toLowerCase().indexOf('no url provided') !== -1
      ? undefined
      : suppLink;
  const linkText = suppLink
    ? 'Publisher supplementary information'
    : 'No publisher supplementary information provided';

  return (
    <Container maxWidth="lg">
      {/** contains the header that is shown in every submodule */}
      <SubmoduleHeader
        linkText={linkText}
        suppLink={suppLink}
        code={props.match.params.code}
        organisationName={get(orgDetails, 'pubName', 'Not found')}
        yearRange={getYearRange(
          get(
            sigdataactivityyearsData,
            "data.facet_counts.facet_pivot['activity_date_iso_date,humanitarian']",
            []
          )
        )}
      />
      {/** contains the routes of the submodules of the signatory data */}
      <SignatoryDataRoutes />
    </Container>
  );
}
