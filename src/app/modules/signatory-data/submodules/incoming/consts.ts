/* eslint-disable @typescript-eslint/camelcase */
export const incomingCallFacetValues = {
  incPledgeBar: { type: 'query', q: 'transaction_type:13' },
  incCommitmentBar: { type: 'query', q: 'transaction_type:11' },
  incFundsBar: { type: 'query', q: 'transaction_type:1' },
};

export const incomingTransactionsValues = {
  incPledgeTransactions: { type: 'query', q: 'transaction_type:13'},
  incCommitmentTransactions: { type: 'query', q: 'transaction_type:11'},
  incFundTransactions: { type: 'query', q: 'transaction_type:1' },
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
  incFunds_4: {
    type: 'query',
    q: 'transaction_type:1 AND transaction_provider_org_provider_activity_id:*',
  }
}

export const inPageNavigationItems = {
  lists: [
    {
      title: 'Incoming Pledges',
      elName: '#incoming_pledges',
    },
    {
      title: 'Incoming Commitments',
      elName: '#incoming_commitments',
    },
    {
      title: 'Incoming Funds',
      elName: '#incoming_funds',
    },
  ],
};
