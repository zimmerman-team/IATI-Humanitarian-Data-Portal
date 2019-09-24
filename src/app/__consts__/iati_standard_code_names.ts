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

// the organisation type code association with
// the type name according to -
// http://reference.iatistandard.org/203/codelists/OrganisationType/
export const orgTypeNames = {
  '10': 'Government',
  '11': 'Local Government',
  '15': 'Other Public Sector',
  '21': 'International NGO',
  '22': 'National NGO',
  '23': 'Regional NGO',
  '24': 'Partner Country based NGO',
  '30': 'Public Private Partnership',
  '40': 'Multilateral',
  '60': 'Foundation',
  '70': 'Private Sector',
  '71': 'Private Sector in Provider Country',
  '72': 'Private Sector in Aid Recipient Country',
  '73': 'Private Sector in Third Country',
  '80': 'Academic, Training and Research',
  '90': 'Other',
  // this addition is NOT from the iati standard
  // its added here for ease of use
  none: '',
};

export const resultTypeNames = {
  '1': 'Output',
  '2': 'Outcome',
  '3': 'Impact',
  '9': 'Other',
};

export const orgRoleNames = {
  '1': 'Funding',
  '2': 'Accountable',
  '3': 'Extending',
  '4': 'Implementing',
};

export const othIDTypeNames = {
  A1: 'Reporting Organisation’s internal activity identifier',
  A2: 'CRS Activity identifier',
  A3: 'Previous Activity Identifier',
  A9: 'Other Activity Identifier',
  B1: 'Previous Reporting Organisation Identifier',
  B9: 'Other Organisation Identifier',
};

export const contactTypeNames = {
  '1': 'General Enquiries',
  '2': 'Project Management',
  '3': 'Financial Management',
  '4': 'Communications',
};

export const regVocNames = {
  '1': 'OECD DAC',
  '2': 'UN',
  '99': 'Reporting Organisation',
};

export const tagVocNames = {
  '1': 'Agrovoc',
  '2': 'UN Sustainable Development Goals (SDG)',
  '3': 'UN Sustainable Development Goals (SDG) Targets',
  '99': 'Reporting Organisation',
};

export const budgItemVocNames = {
  '1': '(withdrawn)IATI',
  '2': 'Country Chart of Accounts',
  '3': 'Other Country System',
  '4': 'Reporting Organisation',
  '5': 'Other',
  none: 'No Data',
};

export const humScopTypeNames = {
  '1': 'Emergency',
  '2': 'Appeal',
};

export const humVocNames = {
  '1-2': 'Glide',
  '2-1': 'Humanitarian Plan',
  '99': 'Reporting Organisation',
};

export const polMarkCodeNames = {
  '1': 'Gender Equality',
  '2': 'Aid to Environment',
  '3': 'Participatory Development/Good Governance',
  '4': 'Trade Development',
  '5': 'Aid Targeting the Objectives of the Convention on Biological Diversity',
  '6':
    'Aid Targeting the Objectives of the Framework Convention on Climate Change - Mitigation',
  '7':
    'Aid Targeting the Objectives of the Framework Convention on Climate Change - Adaptation',
  '8':
    'Aid Targeting the Objectives of the Convention to Combat Desertification',
  '9': 'Reproductive, Maternal, Newborn and Child Health (RMNCH)',
  '10': 'Disaster Risk Reduction(DRR)',
  '11': 'Disability',
  '12': 'Nutrition',
};

export const policMSignificanceName = {
  '0': 'not targeted',
  '1': 'significant objective',
  '2': 'principal objective',
  '3': 'principal objective AND in support of an action programme',
  '4': 'Explicit primary objective',
};

export const polMarkerVocabNames = {
  '1': 'OECD DAC CRS',
  '99': 'Reporting Organisation',
};

export const defAidTypeVocNames = {
  '1': 'OECD DAC CRS',
  '2': 'Earmarking Category',
  '3': 'Earmarking Modality',
  '4': 'Cash and Voucher Modalities',
  '99': 'Reporting Organisation',
};

export const budgTypeNames = {
  '1': 'Original',
  '2': 'Revised',
};

export const budgStatusNames = {
  '1': 'Indicative',
  '2': 'Committed',
};

export const actScopeNames = {
  '1': 'Global',
  '2': 'Regional',
  '3': 'Multi-national',
  '4': 'National',
  '5': 'Sub-national: Multi-first-level administrative areas',
  '6': 'Sub-national: Single first-level administrative area',
  '7': 'Sub-national: Single second-level administrative area',
  '8': 'Single location',
};

export const colabTypeNames = {
  '1': 'Bilateral',
  '2': 'Multilateral (inflows)',
  '3': 'Bilateral, core contributions to NGOs and other private bodies / PPPs',
  '4': 'Multilateral outflows',
  '6': 'Private Sector Outflows',
  '7':
    'Bilateral, ex-post reporting on NGOs’ activities funded through core contributions',
  '8': 'Bilateral, triangular co-operation.',
};

export const defFlowTypeNames = {
  '10': 'ODA',
  '20': 'OOF(withdrawn)',
  '21': 'Non-export credit OOF',
  '22': 'Officially supported export credits',
  '30': 'Private Development Finance',
  '35': 'Private Market',
  '36': 'Private Foreign Direct Investment',
  '37': 'Other Private flows at market terms',
  '40': 'Non flow',
  '50': 'Other flows',
};

export const defTiedStatusName = {
  '3': 'Partially tied',
  '4': 'Tied',
  '5': 'Untied',
};

export const locReachNames = {
  '1': 'Actvity',
  '2': 'Intended Beneficiaries',
};

export const locVocNames = {
  A1: 'Global Admininistrative Unit Layers',
  A2: 'UN Second Administrative Level Boundary Project',
  A3: 'Global Administrative Areas',
  A4: 'ISO Country (3166-1 alpha-2)',
  G1: 'Geonames',
  G2: 'OpenStreetMap',
};

export const locExNames = {
  '1': 'Exact',
  '2': 'Approximate',
};

export const locClassNames = {
  '1': 'Administrative Region',
  '2': 'Populated Place',
  '3': 'Structure',
  '4': 'Other Topographical Feature',
};

export const relActTypes = {
  '1': 'Parent',
  '2': 'Child',
  '3': 'Sibling',
  '4': 'Co-funded',
  '5': 'Third Party',
};
