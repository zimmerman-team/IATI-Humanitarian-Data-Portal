// the activity status code correspondence to
// the name status name according to the
// iati standard - http://reference.iatistandard.org/203/codelists/ActivityStatus/
export const actStatusNames = {
  '1': 'Pipeline/identification',
  '2': 'Implementation',
  '3': 'Finalisation',
  '4': 'Closed',
  '5': 'Cancelled',
  '6': 'Suspended',
};

// the transaction type code correspondence to
// the transaction type name according to the
// iati standard - http://reference.iatistandard.org/203/codelists/TransactionType/
// And their labels used for mlt
export const transTypeNames = {
  '1': {
    name: 'Incoming Funds',
    label: 'Incoming Funds',
  },
  '2': {
    name: 'Outgoing Commitment',
    label: 'Commitment',
  },
  '3': {
    name: 'Disbursement',
    label: 'Disbursement',
  },
  '4': {
    name: 'Expenditure',
    label: 'Expenditure',
  },
  '5': {
    name: 'Interest Payment',
    label: 'Interest Payment',
  },
  '6': {
    name: 'Loan Repayment',
    label: 'Loan Repayment',
  },
  '7': {
    name: 'Reimbursement',
    label: 'Reimbursement',
  },
  '8': {
    name: 'Purchase of Equity',
    label: 'Purchase of Equity',
  },
  '9': {
    name: 'Sale of Equity',
    label: 'Sale of Equity',
  },
  '10': {
    name: 'Credit Guarantee',
    label: 'Credit Guarantee',
  },
  '11': {
    name: 'Incoming Commitment',
    label: 'Commitment',
  },
  '12': {
    name: 'Outgoing Pledge',
    label: 'Pledged',
  },
  '13': {
    name: 'Incoming Pledge',
    label: 'Pledged',
  },
};
