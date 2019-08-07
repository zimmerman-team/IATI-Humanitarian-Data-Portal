import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { SignatoryNavigationModel } from './model';
import { Container, Box, Grid } from '@material-ui/core';

const LocationLink = styled(props => <Link {...props} />)`
  && {
    color: rgba(1, 1, 10, 0.6);
    padding-right: 32px;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const CurrentLocationLink = styled(props => <Link {...props} />)`
  && {
    color: ${Colors.black};
    padding-right: 32px;
    margin-bottom: 20px;

    :hover {
      cursor: default;
      text-decoration: none;
    }
  }
`;

const Underline = styled(props => <div {...props} />)`
  background-color: ${props =>
    props.show ? Colors.primaryBase : 'transparent'};
  height: 4px;
  margin-top: 8px;
`;

//TODO: Implement current location retrieving
const CURRENT_LOCATION = 'Overview';

export function SignatoryNavigation(props: SignatoryNavigationModel) {
  const [currentLocation, setCurrentLocation] = useState(CURRENT_LOCATION);

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    location: string
  ) {
    event.preventDefault();
    setCurrentLocation(location);
  }

  return (
    <Grid container justify="flex-end" wrap="wrap">
      {props.locations.map(location => {
        if (currentLocation === location) {
          return (
            <CurrentLocationLink variant="button">
              {location}
              <Underline show={"true"} />
            </CurrentLocationLink>
          );
        }
        return (
          <LocationLink
            variant="button"
            onClick={e => handleClick(e, location)}
          >
            {location}
            <Underline />
          </LocationLink>
        );
      })}
    </Grid>
  );
}
