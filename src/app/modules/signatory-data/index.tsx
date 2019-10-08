/* core */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';

/* models/interfaces */
import { SignatoryDataModule } from 'app/modules/signatory-data/model';

/* components */
import { SignatoryDataLayout } from 'app/modules/signatory-data/layout';

/* state & utils */
import get from 'lodash/get';
import map from 'lodash/map';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
//import { formatTableSignatories } from 'app/modules/signatory-data/utils';

/* mock */
import { signatoryDataMock, iatigbsignatoriesCallValues, OrgNarrative } from './mock';
import { formatTableSignatories } from 'app/modules/signatory-data/utils';
//import { signatoryDataMock, iatigbsignatoriesCallValues } from './mock';
import { mockDataVar2 } from 'app/components/datadisplay/Table/mock';

export const SignatoryData = React.memo(
  (props: SignatoryDataModule) => {
    useTitle(`MLT - ${signatoryDataMock.title}`);

    const [columns, setColumns] = React.useState(mockDataVar2.columns);
    // const [options, setOptions] = React.useState(mockDataVar2.options);

    const [signatories, setSignatories] = React.useState([]);

    const optionActions = useStoreActions(action => action.sigDataOpts);

    const gbsignatoriesData = useStoreState(state => state.gbsignatories);
    const organisationNarrativeData = useStoreState(state => state.organisationnarrative);
    const iatigbsignatoriesData = useStoreState(
      state => state.iatigbsignatories
    );
    /* create the API call instances */
    const iatigbsignatoriesCall = useStoreActions(
      actions => actions.iatigbsignatories.fetch
    );
    const organisationNarrativeCall = useStoreActions(
      actions => actions.organisationnarrative.fetch
    );

    // so when the component mounts we want to set the
    // table options stored in global easy peasy state
    React.useEffect(() => {
      setColumns(
        mockDataVar2.columns.map((column, index) => {
          // @ts-ignore
          // const { sortDirection, ...newColOptions } = column.options;
          // const newColumn = {
          //   // @ts-ignore
          //   ...column,
          //   options: {
          //     ...newColOptions,
          //     filterList: props.tableOptions.filterLists[index],
          //   },
          // };

          // @ts-ignore
          // if (column.name === props.tableOptions.sortCol) {
          //   newColumn.options.sortDirection = props.tableOptions.sortDir;
          // }

          return {
            // @ts-ignore
            ...column,
            options: {
              ...column.options,
              filterList: props.tableOptions.filterLists[index],
            },
          };
        })
      );
      // setOptions({
      //   ...mockDataVar2.options,
      //   searchText: props.tableOptions.searchTerm,
      // });
    }, []);

    /* use useEffect as componentDidMount and commit the API calls */

    React.useEffect(() => {
      const publishers = map(get(gbsignatoriesData, 'data', []), sig =>
        get(sig, 'IATIOrgRef', '')
      ).join(' ');
      const callValuesNarrative = {
        values: {
          ...OrgNarrative.values,
          q: `reporting_org_ref:(${publishers})`,
        },
      };
      const callValuesIatiSig = {
        values: {
          ...iatigbsignatoriesCallValues.values,
          q: `reporting_org_ref:(${publishers})`,
        },

      };
      organisationNarrativeCall(callValuesNarrative);
      iatigbsignatoriesCall(callValuesIatiSig);
    }, [gbsignatoriesData]);



    React.useEffect(() => {
      setSignatories(
        formatTableSignatories(
          get(iatigbsignatoriesData, 'data.data.facets.iati_orgs.buckets', []),
          get(gbsignatoriesData, 'data', []),
          get(organisationNarrativeData, 'data.data.grouped.reporting_org_ref.groups', []),
        )
      );
    }, [iatigbsignatoriesData && organisationNarrativeData]);

    // filterLists
    const sigTable = mockDataVar2;
    mockDataVar2.columns = columns;
    // mockDataVar2.options = options;
    sigTable.data = signatories;
    sigTable.options.onFilterChange = (changedColumn, filterList) => {
      optionActions.setFilterLists(filterList);
    };
    // sigTable.options.onColumnSortChange = (sortCol, direction) => {
    //   const sortDir = direction === 'ascending' ? 'asc' : 'desc';
    //   optionActions.setSort({ sortCol, sortDir });
    // };
    // sigTable.options.onSearchChange = searchText => {
    //   optionActions.setSearch(searchText);
    // };

    return (
      <SignatoryDataLayout
        sigTable={sigTable}
        title={signatoryDataMock.title}
        description={signatoryDataMock.description}
        loading={organisationNarrativeData.loading || gbsignatoriesData.loading || iatigbsignatoriesData.loading }
      />
    );
    //  we set this to false, because we don't want this
    //  component rerendering everytime the tableOptions change
    //  we only want the global table options to load up
    //  as defaults when the component mounts
  },
  () => true
);
