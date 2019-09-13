/* models and interfaces */
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* consts */
import { orgTypeNames } from 'app/__consts__/iati_standard_code_names';

/* utils */
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
        'ref',
        'role',
        'type',
        'narrative',
      ]),
    });
  }
  return elementLists;
}
