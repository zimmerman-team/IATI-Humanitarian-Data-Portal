/* models/interfaces */
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';
import { RecTypesItemModel } from '../store/interfaces';

/* utils */
import find from 'lodash/find';

/* consts */
import { orgTypeNames } from 'app/__consts__/iati_standard_code_names';

export function formatBarChart(
  allRecTypes: RecTypesItemModel[] | null,
  humRecTypes: RecTypesItemModel[] | null
): HorizontalBarChartCardModel {
  const barChartData: HorizontalBarChartCardModel = {
    title: 'Humanitarian recipient types',
    data: { values: [] },
  };

  if (allRecTypes && humRecTypes) {
    humRecTypes.forEach(humRec => {
      const allRecItem = find(allRecTypes, ['val', humRec.val]);
      if (allRecItem) {
        const percentage = Math.round(
          (humRec.org_count * 100) / allRecItem.org_count
        );

        barChartData.data.values.push({
          percentage,
          name: orgTypeNames[humRec.val ? humRec.val : 'none'],
          value: humRec.org_count,
        });
      }
    });
  }

  return barChartData;
}
