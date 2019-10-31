import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import useLocation from 'react-use/lib/useLocation';
import { Link } from 'react-router-dom';
import logo from 'app/assets/images/logo.png';

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
    display: flex;
    z-index: 10001;
    flex-direction: row;
    margin-bottom: 64px;
    background-color: #f7f7f7;
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
      <Container maxWidth="lg">
        <img
          src={logo}
          width={160}
          height={70}
          alt="logo"
          style={{ position: 'absolute', marginLeft: -32 }}
        />
        <Toolbar
          css={`
            width: 100%;
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
      </Container>
    </BaseComponent>
  );
};

export default AppBar;
