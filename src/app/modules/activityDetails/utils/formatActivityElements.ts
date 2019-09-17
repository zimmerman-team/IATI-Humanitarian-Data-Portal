/* models and interfaces */
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* consts */
import { budgItemVocNames } from 'app/__consts__/iati_standard_code_names';
import {
  actSummFields,
  budgetFields,
  contInfoFields,
  countBufgItFields,
  crsAddFields,
  defAidTypeFields,
  disbursFields,
  docLinkFields,
  fssFields,
  humScopeFields,
  othIdFields,
  partOrgFields,
  polMarkerFields,
  recCountFields,
  recRegFields,
  repOrgFields,
  sectorFields,
  tagFields,
} from '../const';

/* utils */
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { formatSingleCardItem } from './formatSingleCardItem';
import { formatTableCardItems } from './formatTableCardItems';

// so this formating function will format all of the existing elements of the activity
//
export function formatActivityElements(
  actDetail: SingleDefActivity | null
): ListModel[] {
  const elementLists: ListModel[] = [];
  if (actDetail) {
    // pushing activity summary
    elementLists.push({
      title: 'Activity Summary',
      type: 'Card',
      elName: 'summary',
      items: formatSingleCardItem(actDetail, '', actSummFields),
    });

    // pushing rep org
    elementLists.push({
      title: 'Reporting organisation',
      type: 'Card',
      elName: 'repOrg',
      items: formatSingleCardItem(actDetail, 'reporting_org.', repOrgFields),
    });

    // pushing participating organisations
    elementLists.push({
      title: 'Participating organisations',
      type: 'ExpTableCard',
      elName: 'partOrg',
      tableCItems: formatTableCardItems(
        actDetail,
        'participating_org',
        partOrgFields
      ),
    });

    // pushing other identifiers
    elementLists.push({
      title: 'Other identifiers',
      type: 'ExpTableCard',
      elName: 'othIds',
      tableCItems: formatTableCardItems(
        actDetail,
        'other_identifier',
        othIdFields
      ),
    });

    // pushing contact info
    elementLists.push({
      title: 'Contact information',
      type: 'ExpTableCard',
      elName: 'contInfo',
      tableCItems: formatTableCardItems(
        actDetail,
        'contact_info',
        contInfoFields
      ),
    });

    // pushing recipient countries
    elementLists.push({
      title: 'Recipient Countries',
      type: 'ExpTableCard',
      elName: 'recCount',
      tableCItems: formatTableCardItems(
        actDetail,
        'recipient_country',
        recCountFields
      ),
    });

    // pushing recipient regions
    elementLists.push({
      title: 'Recipient Regions',
      type: 'ExpTableCard',
      elName: 'recReg',
      tableCItems: formatTableCardItems(
        actDetail,
        'recipient_region',
        recRegFields
      ),
    });

    // pushing sectors
    elementLists.push({
      title: 'Sectors',
      type: 'ExpTableCard',
      elName: 'sectors',
      tableCItems: formatTableCardItems(actDetail, 'sector', sectorFields),
    });

    // pushing tags
    elementLists.push({
      title: 'Tags',
      type: 'ExpTableCard',
      elName: 'tags',
      tableCItems: formatTableCardItems(actDetail, 'tag', tagFields),
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
        countBufgItFields
      ),
    });

    // pushing humanitarian scopes
    elementLists.push({
      title: 'Humanitarian scope',
      type: 'ExpTableCard',
      elName: 'humScope',
      tableCItems: formatTableCardItems(
        actDetail,
        'humanitarian_scope',
        humScopeFields
      ),
    });

    // pushing policy marker
    elementLists.push({
      title: 'Policy Marker',
      type: 'ExpTableCard',
      elName: 'polMark',
      tableCItems: formatTableCardItems(
        actDetail,
        'policy_marker',
        polMarkerFields
      ),
    });

    // pushing default aid type
    elementLists.push({
      title: 'Default Aid Type',
      type: 'ExpTableCard',
      elName: 'defAidTyp',
      tableCItems: formatTableCardItems(
        actDetail,
        'default_aid_type',
        defAidTypeFields
      ),
    });

    // pushing budget
    elementLists.push({
      title: 'Budget',
      type: 'ExpTableCard',
      elName: 'budget',
      tableCItems: formatTableCardItems(actDetail, 'budget', budgetFields),
    });

    // pushing planned disbursements
    elementLists.push({
      title: 'Planned Disbursements',
      type: 'ExpTableCard',
      elName: 'plannedDis',
      tableCItems: formatTableCardItems(
        actDetail,
        'planned_disbursement',
        disbursFields
      ),
    });

    // pushing document links
    elementLists.push({
      title: 'Document Links',
      type: 'ExpTableCard',
      elName: 'docLinks',
      tableCItems: formatTableCardItems(
        actDetail,
        'document_link',
        docLinkFields
      ),
    });

    // pushing crs_add
    elementLists.push({
      title: 'CRS Add',
      type: 'Card',
      elName: 'crsAdd',
      items: formatSingleCardItem(actDetail, 'crs_add.', crsAddFields),
    });

    // Pushing FSS
    elementLists.push({
      title: `FSS - ${get(actDetail, 'fss.extraction_date', 'No Data')}`,
      type: 'ExpTableCard',
      elName: 'fssEl',
      tableCItems: formatTableCardItems(actDetail, 'fss.forecast', fssFields),
    });
  }
  return sortBy(elementLists, 'title');
}
