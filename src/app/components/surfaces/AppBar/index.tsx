import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import useLocation from 'react-use/lib/useLocation';
import logo from 'app/assets/images/logo.png';
import 'styled-components/macro';
import { Grid } from '@material-ui/core';

const scrollPoint = 25;
type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    display: flex;
    z-index: 2;
    flex-direction: row;
    margin-bottom: 64px;
    background-color: #f7f7f7;
  }
`;

function AppBar(props: AppBarProps) {
  const state = useLocation();
  const [scrollPos, setScrollPos] = React.useState(0);

  function onScroll() {
    setScrollPos(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <BaseComponent
      position="sticky"
      elevation={0}
      location={state.pathname}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item md={1}>
            <a
              href="/"
              css={`
                z-index: 3;
                background-size: contain;
                overflow: hidden;
                width: ${scrollPos > scrollPoint ? 160 : 250}px;
                height: ${scrollPos > scrollPoint ? 70 : 110}px;
                position: absolute;
                top: ${scrollPos > scrollPoint ? -5 : -20}px;
              `}
            >
              <img
                src={logo}
                width={scrollPos > scrollPoint ? 160 : 250}
                height={scrollPos > scrollPoint ? 70 : 110}
                alt="logo"
              />
            </a>
          </Grid>

          <Grid item container justify="center" md={12}>
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
              <AppBarButton
                label="Signatory Progress"
                url="/signatory-progress"
              />
              <AppBarButton label="Signatory Data" url="/signatory-data" />
              <AppBarButton label="FAQs" url="/faq" />
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </BaseComponent>
  );
}

export default AppBar;
