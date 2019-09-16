/* models and interfaces */
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* consts */
import {
  budgItemVocNames,
  budgStatusNames,
  budgTypeNames,
  contactTypeNames,
  defAidTypeVocNames,
  humScopTypeNames,
  humVocNames,
  orgRoleNames,
  orgTypeNames,
  othIDTypeNames,
  policMSignificanceName,
  polMarkCodeNames,
  polMarkerVocabNames,
  regVocNames,
  tagVocNames,
} from 'app/__consts__/iati_standard_code_names';

/* utils */
import get from 'lodash/get';
import { formatSingleCardItem } from './formatSingleCardItem';
import { formatTableCardItems } from './formatTableCardItems';

// so this formating function will format all of the existing elements of the activity
//
export function formatActivityElements(
  actDetail: SingleDefActivity | null
): ListModel[] {
  const elementLists: ListModel[] = [];
  if (actDetail) {
    // pushing rep org
    elementLists.push({
      title: 'Reporting organisation',
      type: 'Card',
      elName: 'repOrg',
      items: formatSingleCardItem(actDetail, 'reporting_org.', [
        { key: 'narrative', label: 'Title' },
        { key: 'type.name', label: 'Type' },
        { key: 'ref', label: 'Reference' },
      ]),
    });

    // pushing participating organisations
    elementLists.push({
      title: 'Participating organisations',
      type: 'ExpTableCard',
      elName: 'partOrg',
      tableCItems: formatTableCardItems(actDetail, 'participating_org', [
        {
          key: 'narrative',
        },
        {
          key: 'ref',
        },
        {
          key: 'type',
          codeNames: orgTypeNames,
        },
        {
          key: 'role',
          codeNames: orgRoleNames,
        },
      ]),
    });

    // pushing other identifiers
    elementLists.push({
      title: 'Other identifiers',
      type: 'ExpTableCard',
      elName: 'othIds',
      tableCItems: formatTableCardItems(actDetail, 'other_identifier', [
        {
          key: 'ref',
        },
        {
          key: 'type',
          codeNames: othIDTypeNames,
        },
        {
          key: 'owner_org_narrative',
        },
        {
          key: 'owner_org_ref',
        },
      ]),
    });

    // pushing contact info
    elementLists.push({
      title: 'Contact information',
      type: 'ExpTableCard',
      elName: 'contInfo',
      tableCItems: formatTableCardItems(actDetail, 'contact_info', [
        {
          key: 'type',
          codeNames: contactTypeNames,
        },
        {
          key: 'telephone',
        },
        {
          key: 'email',
        },
        {
          key: 'website',
          extLink: 'website',
        },
        {
          key: 'organisation_narrative',
        },
        {
          key: 'department_narrative',
        },
        {
          key: 'person_name_narrative',
        },
        {
          key: 'job_title_narrative',
        },
        {
          key: 'mailing_address_narrative',
        },
      ]),
    });

    // pushing recipient countries
    elementLists.push({
      title: 'Recipient Countries',
      type: 'ExpTableCard',
      elName: 'recCount',
      tableCItems: formatTableCardItems(actDetail, 'recipient_country', [
        {
          key: 'narrative',
        },
        {
          key: 'code',
        },
        {
          key: 'percentage',
          suffix: '%',
        },
      ]),
    });

    // pushing recipient regions
    elementLists.push({
      title: 'Recipient Regions',
      type: 'ExpTableCard',
      elName: 'recReg',
      tableCItems: formatTableCardItems(actDetail, 'recipient_region', [
        {
          key: 'narrative',
        },
        {
          key: 'code',
        },
        {
          key: 'percentage',
          suffix: '%',
        },
        {
          key: 'vocabulary',
          codeNames: regVocNames,
        },
        {
          key: 'vocabulary_uri',
          extLink: 'vocabulary_uri',
        },
      ]),
    });

    // pushing sectors
    elementLists.push({
      title: 'Sectors',
      type: 'ExpTableCard',
      elName: 'sectors',
      tableCItems: formatTableCardItems(actDetail, 'sector', [
        {
          key: 'code',
        },
        {
          key: 'narrative',
        },
        {
          key: 'percentage',
          suffix: '%',
        },
      ]),
    });

    // pushing tags
    elementLists.push({
      title: 'Tags',
      type: 'ExpTableCard',
      elName: 'tags',
      tableCItems: formatTableCardItems(actDetail, 'tag', [
        {
          key: 'narrative',
        },
        {
          key: 'code',
        },
        {
          key: 'vocabulary',
          codeNames: tagVocNames,
        },
        {
          key: 'vocabulary_uri',
          extLink: 'vocabulary_uri',
        },
      ]),
    });

    // pushing country budget items
    elementLists.push({
      title: `Country Budget Items - ${
        budgItemVocNames[
          get(actDetail, 'country_budget_items.vocabulary', 'none')
        ]
      }`,
      type: 'ExpTableCard',
      elName: 'countBudgIt',
      tableCItems: formatTableCardItems(
        actDetail,
        'country_budget_items.budget_item',
        [
          {
            key: 'description',
            narrative: true,
          },
          {
            key: 'code',
          },
          {
            key: 'percentage',
            suffix: '%',
          },
        ]
      ),
    });

    // pushing humanitarian scopes
    elementLists.push({
      title: 'Humanitarian scope',
      type: 'ExpTableCard',
      elName: 'humScope',
      tableCItems: formatTableCardItems(actDetail, 'humanitarian_scope', [
        {
          key: 'narrative',
        },
        {
          key: 'code',
        },
        {
          key: 'type',
          codeNames: humScopTypeNames,
        },
        {
          key: 'vocabulary_uri',
          extLink: 'vocabulary_uri',
        },
        {
          key: 'vocabulary',
          codeNames: humVocNames,
        },
      ]),
    });

    // pushing policy marker
    elementLists.push({
      title: 'Policy Marker',
      type: 'ExpTableCard',
      elName: 'polMark',
      tableCItems: formatTableCardItems(actDetail, 'policy_marker', [
        {
          key: 'narrative',
        },
        {
          key: 'code',
          codeNames: polMarkCodeNames,
        },
        {
          key: 'significance',
          codeNames: policMSignificanceName,
        },
        {
          key: 'vocabulary_uri',
          extLink: 'vocabulary_uri',
        },
        {
          key: 'vocabulary',
          codeNames: polMarkerVocabNames,
        },
      ]),
    });

    // pushing default aid type
    elementLists.push({
      title: 'Default Aid Type',
      type: 'ExpTableCard',
      elName: 'defAidTyp',
      tableCItems: formatTableCardItems(actDetail, 'default_aid_type', [
        {
          key: 'code',
        },
        {
          key: 'vocabulary',
          codeNames: defAidTypeVocNames,
        },
      ]),
    });

    // pushing budget
    elementLists.push({
      title: 'Budget',
      type: 'ExpTableCard',
      elName: 'budget',
      tableCItems: formatTableCardItems(actDetail, 'budget', [
        {
          key: 'type',
          codeNames: budgTypeNames,
        },
        {
          key: 'status',
          codeNames: budgStatusNames,
        },
        {
          key: 'period_start',
        },
        {
          key: 'period_end',
        },
        {
          key: 'value',
          value: true,
        },
      ]),
    });

    // pushing planned disbursements
    elementLists.push({
      title: 'Planned Disbursements',
      type: 'ExpTableCard',
      elName: 'plannedDis',
      tableCItems: formatTableCardItems(actDetail, 'planned_disbursement', [
        {
          key: 'type',
          codeNames: budgTypeNames,
        },
        {
          key: 'period_start',
        },
        {
          key: 'period_end',
        },
        {
          key: 'value',
          value: true,
        },
        {
          key: 'provider_org.narrative',
        },
        {
          key: 'provider_org.ref',
        },
        {
          key: 'provider_org.type',
          codeNames: orgTypeNames,
        },
        {
          key: 'receiver_org.narrative',
        },
        {
          key: 'receiver_org.ref',
        },
        {
          key: 'receiver_org.type',
          codeNames: orgTypeNames,
        },
      ]),
    });

    // pushing document links
    elementLists.push({
      title: 'Document Links',
      type: 'ExpTableCard',
      elName: 'docLinks',
      tableCItems: formatTableCardItems(actDetail, 'document_link', [
        {
          key: 'title',
          narrative: true,
          extLink: 'url',
        },
        {
          key: 'category',
          arrayKey: 'name',
        },
        {
          key: 'document_date.iso_date',
        },
      ]),
    });

    // pushing crs_add
    elementLists.push({
      title: 'CRS Add',
      type: 'Card',
      elName: 'crsAdd',
      items: formatSingleCardItem(actDetail, 'crs_add.', [
        {
          key: 'channel_code',
          label: 'Channel Code',
        },
        { key: 'other_flags', label: 'Other Flag Codes', arrayKey: 'code' },
        { key: 'loan_terms.rate.1', label: 'Loan Term Rates 1' },
        { key: 'loan_terms.rate.2', label: 'Loan Term Rates 2' },
        {
          key: 'loan_terms.repayment.type_code',
          label: 'Loan Terms Repayment Code',
        },
        {
          key: 'loan_terms.repayment.plan_code',
          label: 'Loan Terms Repayment Plan',
        },
        {
          key: 'loan_terms.repayment.first_date_iso_date',
          label: 'Loan Terms Repayment Start',
        },
        {
          key: 'loan_terms.repayment.final_date_iso_date',
          label: 'Loan Terms Repayment End',
        },
        {
          key: 'loan_terms.commitment.date_iso_date',
          label: 'Loan Terms Commitment Date',
        },
        {
          key: 'loan_terms.commitment.date_iso_date',
          label: 'Loan Terms Commitment Date',
        },
        {
          key: 'loan_status.year',
          label: 'Loan Date',
        },
        {
          key: 'loan_status.currency',
          label: 'Loan Currency',
        },
        {
          key: 'loan_status.interest_received',
          label: 'Loan Interest Received',
        },
        {
          key: 'loan_status.principal_outstanding',
          label: 'Loan Principal Outstanding',
        },
        {
          key: 'loan_status.principal_arrears',
          label: 'Loan Principal Arrears',
        },
        {
          key: 'loan_status.interest_arrears',
          label: 'Loan Interest Arrears',
        },
      ]),
    });

    // Pushing FSS
    elementLists.push({
      title: `FSS - ${get(actDetail, 'fss.extraction_date', 'No Data')}`,
      type: 'ExpTableCard',
      elName: 'fssEl',
      tableCItems: formatTableCardItems(actDetail, 'fss.forecast', [
        {
          key: 'year',
        },
        {
          key: 'value',
          value: true,
        },
      ]),
    });
  }
  return elementLists;
}
