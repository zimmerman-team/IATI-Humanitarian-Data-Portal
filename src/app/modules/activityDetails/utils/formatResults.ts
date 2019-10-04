/* models/interfaces */
import { ActResultsModel } from '../store/interface';
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';

/* utils */
import find from 'lodash/find';

export function formatResults(
  resultData: ActResultsModel[] | null,
  resultTypeNames
): ListCellModel[][] {
  const results: ListCellModel[][] = [];
  if (resultData && resultData.length > 0) {
    // we push in the headings here
    results.push([
      {
        value: 'Title',
        heading: true,
      },
      {
        value: 'Type',
        heading: true,
      },
      {
        value: 'Aggregation status',
        heading: true,
      },
    ]);

    resultData.forEach(result => {
      const resTypeName = find(resultTypeNames, ['code', result.result_type]);

      results.push([
        {
          link: `/result-detail/${encodeURIComponent(result.id)}`,
          value: result.result_title_narrative[0],
        },
        {
          value: resTypeName ? resTypeName.name : 'No Data',
        },
        {
          value:
            result.result_aggregation_status === '0'
              ? 'Cannot be aggregated'
              : 'Can be aggregated',
        },
      ]);
    });
  }
  return results;
}
