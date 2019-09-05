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
    resultData.forEach(result => {
      results.push([
        {
          link: '#',
          value: result.result_title_narrative[0],
        },
        {
          value: result.result_reference ? result.result_reference[0] : '',
        },
        {
          value: resultTypeNames[result.result_type],
        },
      ]);
    });
  }
  return results;
}
