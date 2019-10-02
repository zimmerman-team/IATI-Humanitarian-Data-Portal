import get from 'lodash/get';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';
import { dateFormat } from './dateFormat';

export const getStatusData = (rawData): ListItemModel[] => {
  return [
    {
      label: 'Latest version of the IATI standard used',
      tooltip: 'Latest version of the IATI standard used',
      values: [{ version: get(rawData, 'facets.latest_iati_version', '') }],
    },
    {
      label: 'Data errors',
      tooltip: 'Data errors',
      values: [{ version: '' }],
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
