import get from 'lodash/get';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';
import { dateFormat } from 'app/modules/signatory-data/submodules/overview/utils/dateFormat';
import { percentage } from 'app/utils/percentage';

export const getStatusData = (
  rawData,
  dataErrors,
  allActCount
): ListItemModel[] => {
  return [
    {
      label: 'Latest version of the IATI standard used',
      tooltip: 'Latest version of the IATI standard used',
      values: [{ version: get(rawData, 'facets.latest_iati_version', '') }],
    },
    {
      label: 'Data errors',
      tooltip: 'Data errors',
      values: [
        { version: get(dataErrors, 'facets.x', 0) }, //currently change it to number but this number is inconsistent with actual data.
        //{ version: percentage(get(dataErrors, 'facets.x', 0), allActCount) },
      ],
    },
    {
      label: 'Latest update',
      tooltip: 'Latest update',
      values: [
        {
          date: dateFormat(
            get(rawData, 'facets.latest_update', '').slice(0, 10)
          ),
        },
      ],
    },
    {
      label: 'Data first published',
      tooltip: 'Data first published',
      values: [
        {
          date: dateFormat(
            get(rawData, 'facets.data_first_published', '').slice(0, 10)
          ),
        },
      ],
    },
  ];
};
