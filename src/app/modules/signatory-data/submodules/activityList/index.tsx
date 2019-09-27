import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { ActivityListLayout } from './layout';
import { useDebouncedCallback } from 'use-debounce';

/* store */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* consts */
import { activitiesQuery, activityBaseTable, colSortNames } from './const';

/* utils */
import { formatActivities } from './utils/formatActivities';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import get from 'lodash/get';
import fileDownload from 'js-file-download';

function ActivityListz(props) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [sortBy, setSortBy] = useState('activity_date_start_actual desc');
  const [searchTerm, setSearchTerm] = useState('*');
  const [status, setStatus] = useState('activity_status_code:*');
  const actStatus = useStoreState(reduxstate => reduxstate.actStatus);
  const actStatusCodeList = get(actStatus, 'data.data', []);
  const [debouncedCallback] = useDebouncedCallback(
    // function
    value => {
      setSearchTerm(value);
    },
    // delay in ms
    1000
  );

  const activitiesAction = useStoreActions(actions => actions.activities.fetch);
  const activitiesDownload = useStoreActions(
    actions => actions.activities.download
  );
  const actState: any = useStoreState(state => state.activities);
  const activities =
    actState && actState.data ? actState.data.data.response : {};

  useEffect(() => {
    activitiesAction({
      values: {
        ...activitiesQuery(
          decodeURIComponent(props.match.params.code),
          searchTerm,
          status
        ),
        rows,
        start: page * rows,
        sort: sortBy,
      },
    });
  }, [page, rows, sortBy, searchTerm, status]);

  activityBaseTable.data = formatActivities(activities.docs);
  // here we load the filters retrieved from the codelists
  // into appropriate columns
  // we load the status names
  // @ts-ignore
  activityBaseTable.columns[2].options.filterOptions = {
    names: actStatusCodeList.map(item => item.name),
  };
  activityBaseTable.options.count = activities.numFound;
  activityBaseTable.options.onChangePage = setPage;
  activityBaseTable.options.onChangeRowsPerPage = setRows;
  activityBaseTable.options.onFilterChange = (column, filteredList) => {
    // so this purely controls selections for the
    // Status column filtering
    if (filteredList[2].length > 0) {
      setStatus(
        filteredList[2]
          .map(
            filterName =>
              `activity_status_code:${
                find(actStatusCodeList, ['name', filterName]).code
              }`
          )
          .join(' OR ')
      );
    } else {
      setStatus('activity_status_code:*');
    }
    // @ts-ignore
    activityBaseTable.columns[2].options.filterList = filteredList[2];
  };
  // oke so because this library is broken when typescript
  // is used, we ignore this nonsense typescript errors
  // @ts-ignore
  activityBaseTable.options.onDownload = (
    buildHead: (whatever) => string,
    buildBody: (nodata) => string,
    columns: false,
    data: false
  ) => {
    activitiesDownload({
      values: {
        ...activitiesQuery(
          decodeURIComponent(props.match.params.code),
          searchTerm,
          status
        ),
        sort: sortBy,
        rows: 1000000,
        wt: 'csv',
      },
    }).then(respData => {
      fileDownload(respData, 'activities.csv');
    });
    return false;
  };
  activityBaseTable.options.searchText = searchTerm.split('*').join('');
  activityBaseTable.options.onSearchChange = searchText => {
    if (searchText.length === 0) {
      debouncedCallback('*');
    } else {
      debouncedCallback(`*${searchText}*`);
    }
  };
  activityBaseTable.options.onColumnSortChange = (colName, direction) => {
    const sortName = colSortNames[colName];
    const sortDir = direction === 'ascending' ? 'asc' : 'desc';
    // and because apperantly we need to change the sorting direction ourselves
    // even though its passed in we'll do it here...
    const colIndex = findIndex(activityBaseTable.columns, ['name', colName]);
    if (typeof activityBaseTable.columns[colIndex] !== 'string') {
      // AND because this mui datable backend sorting is annoying
      // we need to remove all of the sortDirection items from
      // previous elements, before applying a new sort direction...
      activityBaseTable.columns.forEach(column => {
        // @ts-ignore
        if (column.options.sortDirection) {
          // @ts-ignore
          delete column.options.sortDirection;
        }
      });
      // ts ignore is added here
      // because ts does not register the type check in the if
      // and still treats columns as a string
      // even though it IS an object with options in it
      // #JustTypeScriptThings
      // @ts-ignore
      activityBaseTable.columns[colIndex].options.sortDirection = sortDir;
    }

    setSortBy(`${sortName} ${sortDir}`);
  };

  return (
    <ActivityListLayout
      loading={actState.loading}
      activity={activityBaseTable}
    />
  );
}

export const ActivityList = withRouter(ActivityListz);
