import { SignatoryDataModel } from './model';

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
    facet: 'on',
    fl: 'facet_count',
    'facet.pivot':
      'reporting_org_ref,reporting_org_type_code,dataset_iati_version,humanitarian,transaction_type,transaction_provider_org_ref',
  },
};
