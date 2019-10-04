import React from 'react';

/* components */
import { Box, Grid, Hidden } from '@material-ui/core';
import { Element } from 'react-scroll/modules';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { TableCard } from '../Lists/variants/TableCard';
import { List } from 'app/components/datadisplay/Lists';

/* models */
import { NavListsModel } from './model';

// a component that generates list/card items
// and adds navigation to them, all according to the passed in data
/* todo: refactor, these two should not be in one component */
export const TableCardContainer = (props: NavListsModel) => (
  <Grid container spacing={4}>
    <Hidden smDown>
      <Grid item md={3}>
        {/* //cc:move inline css to styled component */}
        <div
          css={`
            position: sticky;
            top: 60px;
          `}
        >
          <InPageNavigation dontShow={props.dontShow} lists={props.lists} />
        </div>
      </Grid>
    </Hidden>
    <Grid item xs={12} md={9}>
      {props.lists.map((list, index) => {
        if (
          !props.dontShow ||
          (list.items && list.items.length > 0) ||
          (list.tableCItems && list.tableCItems.length > 0)
        ) {
          const type = list.type || 'Card';
          return (
            <Element name={list.elName} key={`act-element-${index}`}>
              {type === 'TableCard' || type === 'ExpTableCard' ? (
                <TableCard
                  title={list.title || ''}
                  items={list.tableCItems}
                  expandable={type === 'ExpTableCard'}
                />
              ) : (
                <List
                  elName={list.elName}
                  title={list.title}
                  items={list.items}
                />
              )}
              <Box width="100%" height="32px" />
            </Element>
          );
        }
      })}
    </Grid>
  </Grid>
);
