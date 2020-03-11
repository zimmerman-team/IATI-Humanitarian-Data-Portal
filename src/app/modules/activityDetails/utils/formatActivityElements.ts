/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/camelcase */
/* models and interfaces */
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';
import { CodeListInterface } from 'app/state/api/interfaces/codeListsInterface';

/* utils */
import find from 'lodash/find';

/* consts */
import {
  actSummFields,
  budgetFields,
  conditionsFields,
  contInfoFields,
  countBufgItFields,
  defAidTypeFields,
  disbursFields,
  docLinkFields,
  humScopeFields,
  legDataFields,
  locationFields,
  othIdFields,
  partOrgFields,
  polMarkerFields,
  recCountFields,
  recRegFields,
  relActFields,
  repOrgFields,
  sectorFields,
  tagFields,
} from 'app/modules/activityDetails/const';

/* utils */
import get from 'lodash/get';
import { formatSingleCardItem } from './formatSingleCardItem';
import { formatTableCardItems } from './formatTableCardItems';
import uniq from 'lodash/uniq';

// so this formating function will format all of the existing elements of the activity
//
export function formatActivityElements(
  actDetail: SingleDefActivity | null,
  codeLists: CodeListInterface
): ListModel[] {
  const elementLists: ListModel[] = [];
  if (actDetail) {
    // 1
    // pushing budget
    elementLists.push({
      title: 'Budget',
      type: 'ExpTableCard',
      elName: 'budget',
      tableCItems: formatTableCardItems(
        actDetail,
        'budget',
        budgetFields(
          get(codeLists, 'budgTypeNames.data.data', []),
          get(codeLists, 'budgStatusNames.data.data', [])
        )
      ),
    });

    // 2
    // pushing participating organisations
    elementLists.push({
      title: 'Participating organisations',
      type: 'ExpTableCard',
      elName: 'partOrg',
      tableCItems: formatTableCardItems(
        actDetail,
        'participating_org',
        partOrgFields(
          get(codeLists, 'orgTypeNames.data.data', []),
          get(codeLists, 'orgRoleNames.data.data', [])
        )
      ),
    });

    //3
    // pushing activity summary
    elementLists.push({
      title: 'Activity summary',
      type: 'Card',
      elName: 'summary',
      items: formatSingleCardItem(
        actDetail,
        '',
        actSummFields(
          get(codeLists, 'actStatus.data.data', []),
          get(codeLists, 'actScopeNames.data.data', []),
          get(codeLists, 'colabTypeNames.data.data', []),
          get(codeLists, 'defFlowTypeNames.data.data', []),
          get(codeLists, 'defTiedStatusName.data.data', [])
        )
      ),
    });

    let transCountF: any[] = [];
    const transCount = get(
      actDetail,
      'transaction_recipient_country_code',
      []
    ) as string[];
    if (transCount) {
      transCountF = uniq(transCount).map(c => ({
        country: {
          code: c,
          name: get(
            find(get(codeLists.countNames, 'data.data.response.docs', []), {
              code: c,
            }),
            'name',
            ''
          ),
        },
        // percentage: 0,
      }));
      if (get(actDetail, 'recipient_country', null)) {
        actDetail = {
          ...actDetail,
          recipient_country: [
            ...get(actDetail, 'recipient_country', []),
            ...transCountF,
          ],
        };
      } else {
        actDetail = {
          ...actDetail,
          recipient_country: transCountF,
        };
      }
    }

    //4
    // pushing recipient countries
    elementLists.push({
      title: 'Recipient countries',
      type: 'ExpTableCard',
      elName: 'recCount',
      tableCItems: formatTableCardItems(
        actDetail,
        'recipient_country',
        recCountFields
      ),
    });

    //5
    // pushing recipient regions
    elementLists.push({
      title: 'Recipient regions',
      type: 'ExpTableCard',
      elName: 'recReg',
      tableCItems: formatTableCardItems(
        actDetail,
        'recipient_region',
        recRegFields(get(codeLists, 'regVocNames.data.data', []))
      ),
    });

    // 6
    // pushing locations
    elementLists.push({
      title: 'Locations',
      type: 'ExpTableCard',
      elName: 'locations',
      tableCItems: formatTableCardItems(
        actDetail,
        'location',
        locationFields(
          get(codeLists, 'locReachNames.data.data', []),
          get(codeLists, 'locVocNames.data.data', []),
          get(codeLists, 'locExNames.data.data', []),
          get(codeLists, 'locClassNames.data.data', [])
        )
      ),
    });

    // 7
    // pushing humanitarian scopes
    elementLists.push({
      title: 'Humanitarian scope',
      type: 'ExpTableCard',
      elName: 'humScope',
      tableCItems: formatTableCardItems(
        actDetail,
        'humanitarian_scope',
        humScopeFields(
          get(codeLists, 'humScopTypeNames.data.data', []),
          get(codeLists, 'humVocNames.data.data', [])
        )
      ),
    });

    let transSectorF: any[] = [];
    const transSector = get(
      actDetail,
      'transaction_sector_code',
      []
    ) as string[];
    if (transSector) {
      transSectorF = uniq(transSector).map(c => ({
        sector: {
          code: c,
          name: get(
            find(get(codeLists.sectors, 'data.data', []), {
              code: c,
            }),
            'name',
            ''
          ),
        },
        // percentage: 0,
      }));
      if (get(actDetail, 'sector', null)) {
        actDetail = {
          ...actDetail,
          sector: [...get(actDetail, 'sector', []), ...transSectorF],
        };
      } else {
        actDetail = {
          ...actDetail,
          sector: transSectorF,
        };
      }
    }

    // 8
    // pushing sectors
    elementLists.push({
      title: 'Sectors',
      type: 'ExpTableCard',
      elName: 'sectors',
      tableCItems: formatTableCardItems(
        actDetail,
        'sector',
        sectorFields(get(codeLists, 'sectorVocabs.data.data', []))
      ),
    });

    // 9
    // pushing default aid type
    elementLists.push({
      title: 'Default aid type',
      type: 'ExpTableCard',
      elName: 'defAidTyp',
      tableCItems: formatTableCardItems(
        actDetail,
        'default_aid_type',
        defAidTypeFields(get(codeLists, 'defAidTypeVocNames.data.data', []))
      ),
    });

    // 10
    // pushing policy marker
    elementLists.push({
      title: 'Policy marker',
      type: 'ExpTableCard',
      elName: 'polMark',
      tableCItems: formatTableCardItems(
        actDetail,
        'policy_marker',
        polMarkerFields(
          get(codeLists, 'polMarkCodeNames.data.data', []),
          get(codeLists, 'policMSignificanceName.data.data', []),
          get(codeLists, 'polMarkerVocabNames.data.data', [])
        )
      ),
    });

    // 11
    // pushing tags
    elementLists.push({
      title: 'Tags',
      type: 'ExpTableCard',
      elName: 'tags',
      tableCItems: formatTableCardItems(
        actDetail,
        'tag',
        tagFields(get(codeLists, 'tagVocNames.data.data', []))
      ),
    });

    //12
    // pushing contact info
    (actDetail.contact_info || []).forEach((info, index) => {
      elementLists.push({
        title: `Contact information ${
          get(actDetail, 'contact_info', '').length > 1 ? index + 1 : ''
        }`,
        type: 'Card',
        elName: `contInfo${index}`,
        items: formatSingleCardItem(
          info,
          '',
          contInfoFields(get(codeLists, 'contactTypeNames.data.data', []))
        ),
      });
    });

    // 13
    // pushing other identifiers
    elementLists.push({
      title: 'Other identifiers',
      type: 'ExpTableCard',
      elName: 'othIds',
      tableCItems: formatTableCardItems(
        actDetail,
        'other_identifier',
        othIdFields(get(codeLists, 'othIDTypeNames.data.data', []))
      ),
    });

    // 14
    const budgItVCode = get(
      actDetail,
      'country_budget_items.vocabulary',
      'none'
    );
    const budgItCodeList = get(codeLists, 'budgItemVocNames.data.data', []);
    const budgVocName = find(budgItCodeList, ['code', budgItVCode]);

    //15
    // pushing country budget items
    elementLists.push({
      title: `Country budget items - ${
        budgVocName ? budgVocName.name : 'no data'
      }`,
      type: 'ExpTableCard',
      elName: 'countBudgIt',
      tableCItems: formatTableCardItems(
        actDetail,
        'country_budget_items.budget_item',
        countBufgItFields
      ),
    });

    //16
    // pushing rep org
    /*elementLists.push({
      title: 'Reporting organisation',
      type: 'Card',
      elName: 'repOrg',
      items:
        actDetail.reporting_org &&
        formatSingleCardItem(actDetail, 'reporting_org.', repOrgFields),
    });*/

    //17
    // pushing planned disbursements
    elementLists.push({
      title: 'Planned disbursements',
      type: 'ExpTableCard',
      elName: 'plannedDis',
      tableCItems: formatTableCardItems(
        actDetail,
        'planned_disbursement',
        disbursFields(
          get(codeLists, 'orgTypeNames.data.data', []),
          get(codeLists, 'budgTypeNames.data.data', [])
        )
      ),
    });

    //18
    // pushing document links
    elementLists.push({
      title: 'Document links',
      type: 'ExpTableCard',
      elName: 'docLinks',
      tableCItems: formatTableCardItems(
        actDetail,
        'document_link',
        docLinkFields
      ),
    });

    /* temporarily disabled */
    // pushing crs_add
    /*elementLists.push({
      title: 'CRS add',
      type: 'Card',
      elName: 'crsAdd',
      items:
        actDetail.crs_add &&
        formatSingleCardItem(actDetail, 'crs_add.', crsAddFields),
    });

    /* temporarily disabled */
    // Pushing FSS
    /*elementLists.push({
      title: `FSS - ${get(actDetail, 'fss.extraction_date', 'no data')}`,
      type: 'ExpTableCard',
      elName: 'fssEl',
      tableCItems: formatTableCardItems(actDetail, 'fss.forecast', fssFields),
    });*/

    //19
    // pushing related activities
    elementLists.push({
      title: 'Related activities',
      type: 'ExpTableCard',
      elName: 'relActs',
      tableCItems: formatTableCardItems(
        actDetail,
        'related_activity',
        relActFields(get(codeLists, 'relActTypes.data.data', []))
      ),
    });

    //20
    // pushing legacy data
    elementLists.push({
      title: 'Legacy data',
      type: 'ExpTableCard',
      elName: 'legData',
      tableCItems: formatTableCardItems(
        actDetail,
        'legacy_data',
        legDataFields
      ),
    });

    if (actDetail.conditions) {
      const condAttached =
        actDetail.conditions.attached === '1' ? 'attached' : 'not attached';
      // pushing conditions
      elementLists.push({
        title: `Conditions - ${condAttached}`,
        type: 'ExpTableCard',
        elName: 'conditions',
        tableCItems: formatTableCardItems(
          actDetail,
          'conditions.condition',
          conditionsFields(get(codeLists, 'condCodeNames.data.data', []))
        ),
      });
    }
  }
  return elementLists;
}
