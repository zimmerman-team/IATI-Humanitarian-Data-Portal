import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { BreadcrumbModel } from './model';

const PreviousLink = styled(props => <Link {...props} />)`
  && {
  color: rgba(1, 1, 10, 0.6);
  }
`;

const CurrentLink = styled(props => <Typography {...props} />)`
  && {
  color: ${Colors.branddark}
  }
`;

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

//TODO: no routing logic in this component yet.
export function BreadCrumbs(props: BreadcrumbModel) {
  return (
        <Breadcrumbs aria-label="breadcrumb" >
          {props.previousLocations.map( previousLocation =>
            <PreviousLink variant="subtitle2" href="/" onClick={handleClick}>
              {previousLocation}
            </PreviousLink>
          )}
          <CurrentLink variant="subtitle2">{props.currentLocation}</CurrentLink>
        </Breadcrumbs>
  );
}
