import React from 'react';
import { ActivityDetailsLayout } from './layout';

/* mock */
import { mockData } from './mock';

export function ActivityDetails() {
  const header = {
    organisation: {
      name: 'ActionAid UK',
      code: 'GB-CHC-274467',
    },
    activity: {
      title: 'Promoting Opportunities for Women’s Empowerment and Rights',
      code: 'GB-CHC-274467-GB-XUKDU15001',
      startDate: '01 Jan 16',
      endDate: '31 Dec 20',
    },
  };

  return (
    <ActivityDetailsLayout
      header={header}
      sections={mockData.sections}
      incomingTransactionsTableData={mockData.incomingTransactionsTableData}
      outgoingTransactionsTableData={mockData.outgoingTransactionsTableData}
      inPageNavigation={mockData.inPageNavigation}
      lists={mockData.lists}
    />
  );
}
