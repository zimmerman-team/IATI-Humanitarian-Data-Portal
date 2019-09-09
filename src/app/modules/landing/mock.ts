export const humanitarianCallValues = {
  values: {
    q:
      'humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999])',
    facet: 'on',
    'facet.pivot': 'reporting_org_ref',
    rows: 0,
    'facet.limit': -1,
  },
};
