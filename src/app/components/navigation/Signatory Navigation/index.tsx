import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { SignatoryNavigationModel } from './model';
import { Grid } from '@material-ui/core';
import useLocation from 'react-use/lib/useLocation';
import get from 'lodash/get';

//TODO: Component too convoluted, should be refactored to work the same as the App Bar
const LocationLink = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
    color: rgba(1, 1, 10, 0.6);
    padding-right: 32px;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const CurrentLocationLink = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
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

export function SignatoryNavigation(props: SignatoryNavigationModel) {
  const state = useLocation();

  return (
    <Grid container justify="flex-end" wrap="wrap">
      {props.locations.map(location => {
        if (get(state, 'pathname', '').includes(location.url)) {
          return (
            <CurrentLocationLink
              variant="button"
              key={location.label}
              to={`/signatory-data/${props.activity}/${location.url}`}
            >
              {location.label}
              <Underline show="true" />
            </CurrentLocationLink>
          );
        }
        return (
          <LocationLink
            key={location.label}
            to={`/signatory-data/${props.activity}/${location.url}`}
          >
            {location.label}
            <Underline />
          </LocationLink>
        );
      })}
    </Grid>
  );
}
