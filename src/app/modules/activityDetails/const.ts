import { ActDetailQuery } from './store/interface';

export const actDetailQuery: ActDetailQuery = {
  q: '*:*',
  fl:
    'iati_identifier,title,description,reporting_org_narrative,reporting_org_ref,activity_date_iso_date,activity_date_type',
};
