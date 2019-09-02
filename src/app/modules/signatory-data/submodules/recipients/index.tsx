import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from './layout';
import { mockData } from './mock';

/* local store */
import { recStore } from './store';

/* consts */
import { humActQuery, recBaseTable, recipientsQuery } from './const';
import { pivotKey } from './store/interfaces';

/* utils */
import get from 'lodash/get';
import { formatTableData } from './util/formatTableData';

/* components */
import { ExpandedRow } from 'app/components/datadisplay/Table/common/ExpandedRow';

function RecipientsF(props) {
  const [state, actions] = recStore();

  // so here we get the humanitarian activities of the signatory
  // and we will use the activity identifiers as filters for the
  // transactions BUT one thing is left out of the query for these activities
  // it is the 'transaction/@humanitarion' query check as it makes more
  // sense to check if the transaction is humanitarian when
  // checking the transactions endpoint, as some of the activities
  // transactions may not be humanitarian, so it would be not
  // accurate data in that sense
  useEffect(() => {
    humActQuery.q = humActQuery.q.replace(
      '{rep_org_ref}',
      props.match.params.code
    );
    actions.humActivities.fetch({ values: humActQuery });
  }, []);

  useEffect(() => {
    recipientsQuery.q = recipientsQuery.q.replace(
      '{rep_org_ref}',
      props.match.params.code
    );
    const humIdentifiers = get(
      state.humActivities,
      `data.data.response.docs`,
      []
    );
    if (humIdentifiers.length > 0) {
      const iatiIdentifiers = humIdentifiers
        .map(hum => hum.iati_identifier)
        .join(' ');
      recipientsQuery.q = recipientsQuery.q.replace(
        '{iati_identifiers}',
        iatiIdentifiers
      );
      actions.recipients.fetch({ values: recipientsQuery });
    }
  }, [state.humActivities]);

  const recData = get(
    state.recipients,
    `data.data.facet_counts.facet_pivot.${pivotKey}`,
    null
  );

  const recTableData = formatTableData(recData);

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
    <RecipientsLayout
      activity={mockData.activity}
      barChartData={mockData.barChartData}
      tableData={recBaseTable}
    />
  );
}

export const Recipients = withRouter(RecipientsF);
