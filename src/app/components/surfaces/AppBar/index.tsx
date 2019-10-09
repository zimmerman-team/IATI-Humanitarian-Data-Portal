import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import useLocation from 'react-use/lib/useLocation';
import { Link } from 'react-router-dom';

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
