import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from './layout';

/* local store */
import { recStore } from './store';

/* consts */
import {
  humActQuery,
  recAllTypesQuery,
  recBaseTable,
  recHumTypesQuery,
  recipientsQuery,
} from './const';
import { pivotKey } from './store/interfaces';

/* utils */
import get from 'lodash/get';
import { formatTableData } from './util/formatTableData';

/* components */
import { ExpandedRow } from 'app/components/datadisplay/Table/common/ExpandedRow';
import { formatBarChart } from './util/formatBarChart';

function RecipientsF(props) {
  const [state, actions] = recStore();

  useEffect(() => {
    humActQuery.q = humActQuery.q.replace(
      '{rep_org_ref}',
      props.match.params.code
    );
    // so here we get the humanitarian activities of the signatory
    // and we will use the activity identifiers as filters for the
    // transactions BUT one thing is left out of the query for these activities
    // it is the 'transaction/@humanitarion' query check as it makes more
    // sense to check if the transaction is humanitarian when
    // checking the transactions endpoint, as some of the activities
    // transactions may not be humanitarian, so it would be not
    // accurate data in that sense
    actions.humActivities.fetch({ values: humActQuery });

    // and here we get all the receiving organisation types
    // of the signatory
    actions.allRecTypes.fetch({
      values: recAllTypesQuery(props.match.params.code),
    });
  }, []);

  useEffect(() => {
    const humIdentifiers = get(
      state.humActivities,
      `data.data.response.docs`,
      []
    );
    if (humIdentifiers.length > 0) {
      const iatiIdentifiers = humIdentifiers
        .map(hum => hum.iati_identifier)
        .join(' ');
      // so we call table data here
      actions.recipients.fetch({
        values: recipientsQuery(props.match.params.code, iatiIdentifiers),
      });
      // and here we call the humanitarian bar data
      actions.humRecTypes.fetch({
        values: recHumTypesQuery(props.match.params.code, iatiIdentifiers),
      });
    }
  }, [state.humActivities]);

  const recData = get(
    state.recipients,
    `data.data.facet_counts.facet_pivot.${pivotKey}`,
    null
  );

  const allRecTypes = get(
    state.allRecTypes,
    `data.data.facets.orgTypes.buckets`,
    null
  );

  const humRecTypes = get(
    state.humRecTypes,
    `data.data.facets.orgTypes.buckets`,
    null
  );

  const recTableData = formatTableData(recData);
  const barChartData = formatBarChart(allRecTypes, humRecTypes);

  recBaseTable.data = recTableData.tableData;
  recBaseTable.options.renderExpandableRow = (rowData, rowMeta) => {
    const expData = recTableData.expRowData[rowMeta.rowIndex];
    return (
      <>
        {expData.map((row, index) => {
          return (
            <ExpandedRow key={`exp-row-${index}`} data={row} rowIndex={index} />
          );
        })}
      </>
    );
  };

  return (
    <RecipientsLayout barChartData={barChartData} tableData={recBaseTable} />
  );
}

export const Recipients = withRouter(RecipientsF);
