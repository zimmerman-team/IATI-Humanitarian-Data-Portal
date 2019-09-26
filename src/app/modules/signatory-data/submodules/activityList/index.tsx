import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { ActivityListLayout } from './layout';

/* store */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* consts */
import { activitiesQuery, activityBaseTable, colSortNames } from './const';

/* utils */
import { formatActivities } from './utils/formatActivities';
import findIndex from 'lodash/findIndex';
import { useDebounce } from 'app/utils/debaunce';

function ActivityListz(props) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [sortBy, setSortBy] = useState('activity_date_start_actual desc');
  const [searchTerm, setSearchTerm] = useState('*');

  const activitiesAction = useStoreActions(actions => actions.activities.fetch);
  const actState: any = useStoreState(state => state.activities.data);
  const activities = actState ? actState.data.response : {};

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // specific effect for debounce
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('debouncedSearchTerm CHANGE', debouncedSearchTerm);
      activitiesAction({
        values: {
          ...activitiesQuery(
            decodeURIComponent(props.match.params.code),
            searchTerm
          ),
          rows,
          start: page * rows,
          sort: sortBy,
        },
      });
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    activitiesAction({
      values: {
        ...activitiesQuery(
          decodeURIComponent(props.match.params.code),
          searchTerm
        ),
        rows,
        start: page * rows,
        sort: sortBy,
      },
    });
  }, [page, rows, sortBy]);

  activityBaseTable.data = formatActivities(activities.docs);
  activityBaseTable.options.count = activities.numFound;
  activityBaseTable.options.onChangePage = setPage;
  activityBaseTable.options.onChangeRowsPerPage = setRows;
  activityBaseTable.options.onSearchChange = searchText => {
    // TODO fix this cause it aint working
    setSearchTerm(searchText);
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

  return <ActivityListLayout activity={activityBaseTable} />;
}

export const ActivityList = withRouter(ActivityListz);
