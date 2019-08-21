import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import styled from 'styled-components';
import Colors from 'app/theme/color';
import { BreadcrumbModel } from './model';
import { NavLink } from 'react-router-dom';

const PreviousLink = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
    color: rgba(1, 1, 10, 0.6);
  }
`;

const CurrentLink = styled(props => <Typography {...props} />)`
  && {
    color: ${Colors.branddark};
  }
`;

//TODO: no routing logic in this component yet.
export function BreadCrumbs(props: BreadcrumbModel) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.previousLocations.map(previousLocation => (
        <PreviousLink variant="subtitle2" strict to={previousLocation.url}>
          {previousLocation.label}
        </PreviousLink>
      ))}
      <CurrentLink variant="subtitle2">{props.currentLocation}</CurrentLink>
    </Breadcrumbs>
  );
}
