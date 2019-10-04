/* eslint-disable @typescript-eslint/camelcase */
export const humCallValues = {
  humElData_1: {
    type: 'query',
    q: 'humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:[* TO *]',
  },
  humElData_2: {
    type: 'query',
    q: 'sector_vocabulary:10 AND sector:[* TO *]',
  },
  humElData_3: {
    type: 'query',
    q: 'humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:[* TO *]',
  },
  humElData_4: {
    type: 'query',
    q: 'humanitarian_scope_vocabulary:99 AND default_aid_type_vocabulary:3',
  },
  currentHumValuesData: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 2] AND activity_date_iso_date:[* TO NOW]) AND (activity_date_type:[3 TO 4] AND activity_date_iso_date:[NOW TO *])',
  },
  humActFTSData_1: {
    type: 'query',
    q: '(sector_code:[70000 TO 79999] AND (sector_vocabulary:*))',
  },
  humActFTSData_2: {
    type: 'query',
    q: '(humanitarian:1 OR transaction_humanitarian:1)',
  },
  humActFTSData_3: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*)',
  },
  humActFTSData_4: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:*)',
  },
  humActFTSData_5: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:99 AND default_aid_type_vocabulary:3)',
  },
  humActFTSData_6: {
    type: 'query',
    q: '(sector_code:* AND sector_vocabulary:10)',
  },
  humActwGBClassificationsData_1: {
    type: 'query',
    q: '(default_aid_type_vocabulary:2 AND default_aid_type_code:*)',
  },
  humActwGBClassificationsData_2: {
    type: 'query',
    q: '(default_aid_type_vocabulary:3 AND default_aid_type_code:*)',
  },
  humActwGBClassificationsData_3: {
    type: 'query',
    q: '(participating_org_type:24 AND participating_org_role:4)',
  },
  humOtherClassOfInterestData_1: {
    type: 'query',
    q: '(sector_code:* AND -(-sector_vocabulary:1 OR sector_vocabulary:*))',
  },
  humOtherClassOfInterestData_2: {
    type: 'query',
    q: '(default_aid_type_vocabulary=1 AND default_aid_type_code:*)',
  },
  humOtherClassOfInterestData_3: {
    type: 'query',
    q: '(sector_code=* AND sector_vocabulary:[7 TO 9])',
  },
  humOtherClassOfInterestData_4: {
    type: 'query',
    q:
      '(policy_marker_code:1 AND -(-sector_vocabulary:1 OR sector_vocabulary:*))',
  },
  humActWLocationInfoData_1: {
    type: 'query',
    q: 'recipient_country_code:*',
  },
  humActWLocationInfoData_region: {
    type: 'query',
    q: 'recipient_region_code:*',
  },
  humActWLocationInfoData_2: {
    type: 'query',
    q: 'location_point_pos:*',
  },
  humActWLocationInfoData_3: {
    type: 'query',
    q: 'location_id_code:*',
  },
  humActWLocationInfoData_4: {
    type: 'query',
    q: '-(location_point_pos:* AND location_id_code:*)',
  },
  humActWMultiYearFundData_1: {
    type: 'query',
    q: '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *])',
  },
  humActWMultiYearFundData_2: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *] AND -budget:*)',
  },
  humActWMultiYearFundData_3: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *] AND budget_period_start_iso_date:[* TO *] AND (budget_period_end_iso_date:[* TO *] AND budget_value:*))',
  },
  HRActivitiesRes: {
    type: 'query',
    q: 'result_title_narrative:*',
  },
  HRActDocLinks: {
    type: 'query',
    q: 'result_document_link_url:*',
  },
  HRActIndBase: {
    type: 'query',
    q:
      'result_indicator_title_narrative:* AND result_indicator_baseline_value:* AND result_indicator_period_target_value:*',
  },
  HRIndDocLinks: {
    type: 'query',
    q: 'result_indicator_document_link_url:*',
  },
};

export const activityStatusValues = {
  latest_update: 'max(last_updated_datetime)',
  data_first_published: 'min(last_updated_datetime)',
  latest_iati_version: 'max(dataset_iati_version)',
  currentHumValuesData: {
    type: 'query',
    q:
      '((activity_date_type: [1 TO 2] AND activity_date_iso_date: [* TO NOW]) AND (activity_date_type: [3 TO 4] AND activity_date_iso_date: [NOW TO *]) AND humanitarian: 1)',
  },
  currency: {
    type: 'terms',
    field: 'default_currency',
    limit: 1,
  },
};

export const barJsonFacet = years => {
  const result = {};

  years.forEach(year => {
    result[year] = {
      type: 'query',
      q: `activity_date_iso_date:[${year}-01-01T00:00:00Z TO ${year}-12-31T24:00:00Z]'`,
      facet: {
        hum_count: {
          type: 'query',
          q:
            'humanitarian:1 OR transaction_humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:* AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018]))',
        },
      },
    };
  });

  return result;
};
