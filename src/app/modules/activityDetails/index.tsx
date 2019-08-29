import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ActivityDetailsLayout } from './layout';

/* utils */
import get from 'lodash/get';
import { formatHeader } from './utils/formatHeader';

/* consts */
import { actDetailQuery } from './const';

/* store */
import { actDetailStore } from './store';

/* mock */
import { mockData } from './mock';
import { formatSections } from './utils/formatSections';

function ActivityDetail(props) {
  const [state, actions] = actDetailStore();

  useEffect(() => {
    actDetailQuery.q = `iati_identifier:${props.match.params.code}`;
    actions.actDetail.fetch({ values: actDetailQuery });
  }, []);

  const actDetail = get(state.actDetail, 'data.data.response.docs[0]', null);

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
