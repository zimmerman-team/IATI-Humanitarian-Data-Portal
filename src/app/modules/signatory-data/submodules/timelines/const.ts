export const timlagQuery = (repOrgRef: string) => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND 
    (humanitarian:1 OR transaction_humanitarian:1 OR 
      (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
      (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
      (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
      (transaction_sector_code:[70000 TO 79999] OR
       transaction_sector_code:[93010 TO 93018])))`,
    'json.facet': `{monthly_transactions: { type: "range", field: "transaction_date_iso_date", start: "1900-01-01T00:00:00Z", end: "NOW", gap:"+1MONTHS", mincount: 1}}`,
    rows: 0,
  };
};

export const orgFreqQuery = (repOrgRef: string) => {
  return {
    tableName: 'frequency',
    qField: 'sig_ref',
    qOperator: '==',
    qValue: repOrgRef,
    sort: 'month_date',
  };
};

export const firstPubQuery = (repOrgRef: string) => {
  return {
    q: `reporting_org_ref:${repOrgRef}`,
    fl: 'dataset_date_created',
    sort: 'dataset_date_created asc',
    rows: 1,
  };
};
