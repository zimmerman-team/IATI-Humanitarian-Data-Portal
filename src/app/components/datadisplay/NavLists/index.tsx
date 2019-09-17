import React from 'react';

/* components */
import { Box, Grid, Hidden } from '@material-ui/core';
import { Element } from 'react-scroll/modules';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { TableCard } from '../Lists/variants/TableCard';
import { List } from '../Lists';

/* models */
import { NavListsModel } from './model';

// a component that generates list/card items
// and adds navigation to them, all according to the passed in data
export const NavLists = (props: NavListsModel) => (
  <Grid container spacing={4}>
    <Hidden only="md">
      <Grid item lg={3}>
        <InPageNavigation lists={props.lists} />
      </Grid>
    </Hidden>
    <Grid item lg={8} md={12}>
      {props.lists.map((list, index) => {
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
      })}
    </Grid>
  </Grid>
);
