/* eslint-disable @typescript-eslint/camelcase */
export const incomingCallFacetValues = {
  incPledgeBar: { type: 'query', q: 'transaction_type:13' },
  incCommitmentBar: { type: 'query', q: 'transaction_type:11' },
  incFundsBar: { type: 'query', q: 'transaction_type:1' },
  incPledge_2: {
    type: 'query',
    q: '(transaction_type:13 AND transaction_provider_org_narrative:*)',
  },
  incPledge_3: {
    type: 'query',
    q: '(transaction_type:13 AND transaction_provider_org_type:*)',
  },
  incCommitment_2: {
    type: 'query',
    q: '(transaction_type:11 AND transaction_provider_org_narrative:*)',
  },
  incCommitment_3: {
    type: 'query',
    q: '(transaction_type:11 AND transaction_provider_org_type:*)',
  },
  incFunds_2: {
    type: 'query',
    q: '(transaction_type:1 AND transaction_provider_org_narrative:*)',
  },
  incFunds_3: {
    type: 'query',
    q: '(transaction_type:1 AND transaction_provider_org_type:*)',
  },
};

export const incomingCallFacetValuesTrace = {
  incFunds_4: {
    type: 'query',
    q: 'transaction_type:1',
  },
};

export const inPageNavigationItems = {
  locations: [
    {
      label: 'Incoming Pledges',
      url: '#incoming_pledges',
    },
    {
      label: 'Incoming Commitments',
      url: '#incoming_commitments',
    },
    {
      label: 'Incoming Funds',
      url: '#incoming_funds',
    },
  ],
};
