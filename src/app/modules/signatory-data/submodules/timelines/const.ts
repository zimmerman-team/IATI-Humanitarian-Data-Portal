export const timlagQuery = (repOrgRef: string) => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND (transaction_humanitarian:1 
        OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* 
        AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018])))`,
    'json.facet': `{monthly_transactions: { type: "range", field: "transaction_date_iso_date", start: "1900-01-01T00:00:00Z", end: "NOW", gap:"+1MONTHS", mincount: 1}}`,
    rows: 0,
  };
};
