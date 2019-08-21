import { ApiModel } from './index';

// so this is the interface for a single activity response data
// describing all of the activity fields returned without
// any extra or any less fields requested
interface SingleDefActivity {
  id: string;
  iati_identifier: string;
  activity_status_code: string;
  collaboration_type_code: string;
  capital_spend_percentage: number;
  iati_version: string;
  activity_scope_code: string;
  default_flow_type_code: string;
  default_tied_status_code: string;
  reporting_org_ref: string;
  reporting_org_type: string;
  reporting_org_secondary_reporter: string;
  reporting_org_narrative: Array<string>;
  title: Array<string>;
  description: Array<string>;
  participating_org_ref: Array<string>;
  participating_org_role: Array<string>;
  participating_org_type: Array<string>;
  participating_org_narrative: Array<string>;
  activity_date_iso_date: Array<string>;
  activity_date_type: Array<string>;
  contact_info_telephone: Array<string>;
  contact_info_email: Array<string>;
  contact_info_person_name_narrative: Array<string>;
  contact_info_job_title_narrative: Array<string>;
  recipient_country_percentage: Array<number>;
  recipient_country_code: Array<string>;
  location_point_pos: Array<string>;
  location_ref: Array<string>;
  location_name_narrative: Array<string>;
  sector_vocabulary_uri: Array<string>;
  sector_code: Array<string>;
  sector_vocabulary: Array<string>;
  sector_percentage: Array<number>;
  sector_narrative: Array<string>;
  default_aid_type_code: Array<string>;
  default_aid_type_vocabulary: Array<string>;
  budget_period_end_iso_date: Array<string>;
  budget_status: Array<string>;
  budget_period_start_iso_date: Array<string>;
  budget_type: Array<string>;
  budget_value: Array<number>;
  budget_value_currency: Array<string>;
  budget_value_date: Array<string>;
  transaction_date_iso_date: Array<string>;
  transaction_ref: Array<string>;
  transaction_type: Array<string>;
  transaction_tied_status_code: Array<string>;
  transaction_value: Array<number>;
  transaction_value_currency: Array<string>;
  transaction_flow_type_code: Array<string>;
  transaction_humanitarian: Array<string>;
  transaction_value_date: Array<string>;
  transaction_provider_org_provider_activity_id: Array<string>;
  transaction_provider_org_ref: Array<string>;
  transaction_provider_org_type: Array<string>;
  transaction_provider_org_narrative: Array<string>;
  transaction_receiver_org_narrative: Array<string>;
  document_link_format: Array<string>;
  document_link_url: Array<string>;
  document_link_description_narrative_lang: Array<string>;
  document_link_title_narrative: Array<string>;
  document_link_category_code: Array<string>;
  document_link_language_code: Array<string>;
  related_activity_ref: Array<string>;
  related_activity_type: Array<string>;
  _version_: number;
}

export interface ActivityResponse {
  responseHeader: {
    status: number;
    QTime: number;
    params: {
      q: string;
    };
  };
  response: {
    numFound: number;
    start: number;
    docs: Array<SingleDefActivity>;
  };
}

interface ActivityQuery {
  q: string;
  facet?: string;
  'facet.field'?: string;
  fl?: string;
}

export default interface ActivityResponceInterface
  extends ApiModel<ActivityQuery, ActivityResponse> {}
