import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import theme from 'app/theme';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import useLocation from 'react-use/lib/useLocation';
import { Link } from 'react-router-dom';
/* state & utils */
import { useStoreActions } from 'app/state/store/hooks';
import { useStoreState } from 'easy-peasy';
import { Box } from '@material-ui/core';

const LinkMod = styled(Link)`
  text-decoration: none;
  color: white;
`;

type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    background-color: #f7f7f7;
    margin-bottom: 64px;
  }
`;

const AppBar = (props: AppBarProps) => {
  const state = useLocation();

  return (
    <BaseComponent
      position="sticky"
      elevation={0}
      location={state.pathname}
      {...props}
    >
      <Toolbar
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        `}
        data-testid="main-nav-button-container"
      >
        <AppBarButton label="Home" url="/" />
        <AppBarButton label="About" url="/about" />
        <AppBarButton label="Signatory Progress" url="/signatory-progress" />
        <AppBarButton label="Signatory Data" url="/signatory-data" />
        <AppBarButton label="FAQ's" url="/faq" />
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
