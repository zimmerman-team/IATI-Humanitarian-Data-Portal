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
  reporting_org_narrative: string[];
  title: string[];
  description: string[];
  participating_org_ref: string[];
  participating_org_role: string[];
  participating_org_type: string[];
  participating_org_narrative: string[];
  activity_date_iso_date: string[];
  activity_date_type: string[];
  contact_info_telephone: string[];
  contact_info_email: string[];
  contact_info_person_name_narrative: string[];
  contact_info_job_title_narrative: string[];
  recipient_country_percentage: number[];
  recipient_country_code: string[];
  location_point_pos: string[];
  location_ref: string[];
  location_name_narrative: string[];
  sector_vocabulary_uri: string[];
  sector_code: string[];
  sector_vocabulary: string[];
  sector_percentage: number[];
  sector_narrative: string[];
  default_aid_type_code: string[];
  default_aid_type_vocabulary: string[];
  budget_period_end_iso_date: string[];
  budget_status: string[];
  budget_period_start_iso_date: string[];
  budget_type: string[];
  budget_value: number[];
  budget_value_currency: string[];
  budget_value_date: string[];
  transaction_date_iso_date: string[];
  transaction_ref: string[];
  transaction_type: string[];
  transaction_tied_status_code: string[];
  transaction_value: number[];
  transaction_value_currency: string[];
  transaction_flow_type_code: string[];
  transaction_humanitarian: string[];
  transaction_value_date: string[];
  transaction_provider_org_provider_activity_id: string[];
  transaction_provider_org_ref: string[];
  transaction_provider_org_type: string[];
  transaction_provider_org_narrative: string[];
  transaction_receiver_org_narrative: string[];
  document_link_format: string[];
  document_link_url: string[];
  document_link_description_narrative_lang: string[];
  document_link_title_narrative: string[];
  document_link_category_code: string[];
  document_link_language_code: string[];
  related_activity_ref: string[];
  related_activity_type: string[];
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
    docs: SingleDefActivity[];
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
