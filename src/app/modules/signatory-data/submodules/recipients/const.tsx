/* models/interfaces */
import { RecipientsQueryModel } from './store/interfaces';

export const recipientsQuery = (
  repOrgRef: string,
  iatiIdentifiers: string
): RecipientsQueryModel => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND transaction_type:(12 2 3 4) AND (transaction_humanitarian:1 OR 
        transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* 
        AND (transaction_sector_code:[70000 TO 79999] OR
         transaction_sector_code:[93010 TO 93018])) OR iati_identifier:(${iatiIdentifiers}))`,
    stats: true,
    'facet.pivot':
      '{!stats=piv1}transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type,iati_identifier,transaction_type,transaction_value_currency',
    rows: 0,
    facet: 'on',
    'stats.field': '{!tag=piv1 sum=true}transaction_value',
    'facet.limit': -1,
    'facet.missing': true,
  };
};

// so this query gets the humanitarian activity identifiers
// of a specified signatory
// which do have 'transaction_receiver'(recipient) data
export const humActQuery = {
  q:
    'reporting_org_ref:{rep_org_ref} AND (transaction_receiver_org_narrative:* ' +
    'OR transaction_receiver_org_ref:*) AND (humanitarian:1 OR sector_vocabulary:1 ' +
    'OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])))',
  fl: 'iati_identifier',
  rows: 100000,
};
