/* models/interfaces */
import { RecipientsQueryModel } from 'app/modules/signatory-data/submodules/recipients/store/interfaces';

export const allRecipientsQuery = (pubRef: string, field: string) => {
  return {
    q: `reporting_org_ref:${pubRef} AND transaction_type:(12 2 3 4) AND 
    (humanitarian:1 OR transaction_humanitarian:1 OR 
  (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
  (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
  (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
  (transaction_sector_code:[70000 TO 79999] OR
   transaction_sector_code:[93010 TO 93018])))`,
    'facet.limit': -1,
    'facet.pivot': field,
    'facet.missing': 'true',
    rows: 0,
    facet: 'on',
  };
};

export const recipientsQuery = (
  repOrgRef: string,
  offset: number
): RecipientsQueryModel => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND transaction_type:(12 2 3 4) AND 
        (humanitarian:1 OR transaction_humanitarian:1 OR 
      (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
      (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
      (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
      (transaction_sector_code:[70000 TO 79999] OR
       transaction_sector_code:[93010 TO 93018])))`,
    stats: true,
    'facet.pivot':
      '{!stats=piv1}transaction_receiver_org_ref,transaction_receiver_org_narrative,transaction_receiver_org_type,iati_identifier,transaction_type,transaction_value_currency',
    // rows: 0,
    facet: 'on',
    'stats.field': '{!tag=piv1 sum=true}transaction_value',
    'f.transaction_receiver_org_narrative.facet.limit': 10,
    'f.transaction_receiver_org_narrative.facet.offset': offset,
    'facet.missing': true,
  };
};
