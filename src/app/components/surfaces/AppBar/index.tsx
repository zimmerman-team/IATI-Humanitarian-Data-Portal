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
    // position: fixed;
    // top: 0;
  }
`;

const AppBar = (props: AppBarProps) => {
  const state = useLocation();
  const gbsignatoriesData = useStoreState(
    reduxstate => reduxstate.gbsignatories
  );
  if (!gbsignatoriesData.success && !gbsignatoriesData.loading) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useStoreActions(actions => actions.gbsignatories.fetch)({});
  }

  return (
    <BaseComponent
      position="static"
      elevation={0}
      location={state.pathname}
      {...props}
    >
      <Toolbar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid>
            <AppBarButton label="Home" url="/" data-cy="appbar-button1" />
            <AppBarButton label="About" url="/about" data-cy="appbar-button2" />
            <AppBarButton
              label="Signatory Progress"
              url="/signatory-progress"
              data-cy="appbar-button3"
            />
            <AppBarButton
              label="Signatory Data"
              url="/signatory-data"
              data-cy="appbar-button4"
            />
            <AppBarButton label="FAQ's" url="/faq" data-cy="appbar-button5" />

            {/*<AppBarButton label="API documentation" link="" data-cy="appbar-button3"/>*/}
            {/*<AppBarButton label="Github" data-cy="appbar-button4"/>*/}
          </Grid>
        </Grid>
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
