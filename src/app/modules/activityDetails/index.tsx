import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ActivityDetailsLayout } from './layout';

/* utils */
import get from 'lodash/get';
import { formatHeader } from './utils/formatHeader';

/* consts */
import { actMetadataQuery } from './const';

/* store */
import { actDetailStore } from './store';

/* mock */
import { mockData } from './mock';
import { formatSections } from './utils/formatSections';

function ActivityDetail(props) {
  const [state, actions] = actDetailStore();

  const activityFilter = `iati_identifier:${props.match.params.code}`;

  useEffect(() => {
    actMetadataQuery.q = activityFilter;
    actions.actMetadata.fetch({ values: actMetadataQuery });
  }, []);

  const actDetail = get(state.actMetadata, 'data.data.response.docs[0]', null);

  const header = formatHeader(actDetail);
  const sections = formatSections(actDetail);

  return (
    <ActivityDetailsLayout
      header={header}
      sections={sections}
      incomingTransactionsTableData={mockData.incomingTransactionsTableData}
      outgoingTransactionsTableData={mockData.outgoingTransactionsTableData}
      inPageNavigation={mockData.inPageNavigation}
      lists={mockData.lists}
    />
  );
}

export const ActivityDetails = withRouter(ActivityDetail);
