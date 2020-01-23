import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { SignatoryNavigationModel } from 'app/components/navigation/SignatoryNavigation/model';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import useLocation from 'react-use/lib/useLocation';
import get from 'lodash/get';
import { css } from 'styled-components/macro';

const Link = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
    color: ${props =>
      props.isActiveLink ? 'rgba(1, 1, 1)' : 'rgba(1, 1, 10, 0.6)'};
    padding-right: 32px;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
      text-decoration: none;
    }

    &:last-child {
      padding: 0;
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  function isActiveLink(url: string): boolean {
    return get(state, 'pathname', '').includes(url);
  }

  return (
    <Grid container justify="flex-end">
      {props.items.map(item => {
        return (
          <Grid
            item
            justify="flex-end"
            css={`
              padding-left: ${matches ? '24px' : '32px'};
              margin-bottom: 10px !important;
            `}
          >
            <Link
              key={item.label}
              to={`/signatory-data/${props.activity}/${item.url}`}
              isActiveLink={isActiveLink(item.url)}
            >
              {item.label}
              <Underline show={isActiveLink(item.url)} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
