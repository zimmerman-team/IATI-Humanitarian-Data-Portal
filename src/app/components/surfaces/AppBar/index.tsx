import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import useLocation from 'react-use/lib/useLocation';
import logo from 'app/assets/images/logo.png';

const scrollPoint = 25;
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
        <img
          src={logo}
          width={scrollPos > scrollPoint ? 160 : 250}
          height={scrollPos > scrollPoint ? 70 : 110}
          alt="logo"
          style={{
            position: 'absolute',
            marginLeft: scrollPos > scrollPoint ? -32 : -48,
            top: scrollPos > scrollPoint ? -5 : -20,
          }}
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
}

export default AppBar;
