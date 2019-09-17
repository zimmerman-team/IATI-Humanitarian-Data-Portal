/* models/interfaces */
import { ActResultsModel } from '../store/interface';
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';

/* consts */
import { resultTypeNames } from 'app/__consts__/iati_standard_code_names';

export function formatResults(
  resultData: ActResultsModel[] | null
): ListCellModel[][] {
  const results: ListCellModel[][] = [];
  if (resultData) {
    console.log('resultData', resultData);
    resultData.forEach(result => {
      results.push([
        {
          link: `/result-detail/${result.id}`,
          value: result.result_title_narrative[0],
        },
        {
          value: resultTypeNames[result.result_type],
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
