import { SignatoryDataModel } from 'app/modules/signatory-data/model';

export const signatoryDataMock: SignatoryDataModel = {
  loading: false,
  title: 'Grand Bargain signatories',
  description:
    'An overview of the IATI ("open") data currently published by individual Grand Bargain signatorys or their affiliated organisations. Its primary purpose is to enable Signatories to monitor their own progress in relation to meeting the data publication commitment of the Grand Bargain. Each column in the table relates to a specific IATI publishing indicator as defined within the workstream Core Commitment Target Results & Indicators (CCTRIs).',
  signatories: [
    {
      publishinOrganisation: 'ActionAid UK ',
      gbSignatory: 'ActionAid UK',
      organisationType: 'International NGO',
      iatiVersion: 2.03,
      humanitarianData: {
        primary: true,
        secondary: true,
        tertiary: true,
        quaternary: false,
      },
    },
    {
      publishinOrganisation: 'ActionAid UK ',
      gbSignatory: 'ActionAid UK',
      organisationType: 'Multilateral',
      iatiVersion: 2.03,
      humanitarianData: {
        primary: true,
        secondary: false,
        tertiary: true,
        quaternary: 'n.a',
      },
    },
  ],
};

export const iatigbsignatoriesCallValues = {
  values: {
    q: '*:*',
    rows: 0,
    'json.facet': `{
      iati_orgs: {
        type: 'terms',
        limit: -1,
        field: 'reporting_org_ref',
        facet: {
          latest_iati_version: 'max(dataset_iati_version)',
          pubHumData: {
            type: 'query',
            q: 'humanitarian:1 OR transaction_humanitarian:1 
              OR sector_vocabulary:1 OR (-sector_vocabulary:*
              AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018]))
              OR transaction_sector_vocabulary:1 OR (-transaction_sector_vocabulary:*
              AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018]))',
            facet: {
              v202: {
                type: 'query',
                q:
                  '(humanitarian_scope_vocabulary:"2-1" AND humanitarian_scope_code:*) 
                  OR (sector:* AND sector_vocabulary:10) OR (humanitarian_scope_vocabulary:"1-2" 
                  AND humanitarian_scope_code:*)',
              },
              v203: {
                type: 'query',
                q:
                  'transaction_type:(12 13) OR default_aid_type_vocabulary:(2 3 4) 
                  OR ((participating_org_type:24 AND participating_org_role:4) 
                  OR transaction_receiver_org_type_code:24)',
              },
            },
          },
          traec: {
            type: 'query',
            q: 'transaction_provider_org_provider_activity_id: *',
          },
        },
      },
    }`,
  },
};

export const helloTesting = {
  values: {
    q: '*:*',
    rows: 500000,
    group: 'on',
    'group.field':'reporting_org_ref',
    fl:'reporting_org_narrative',

  },
};
