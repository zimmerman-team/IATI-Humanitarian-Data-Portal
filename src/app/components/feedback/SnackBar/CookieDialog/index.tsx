import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import styled from 'styled-components';
import ContainedButton from 'app/components/inputs/buttons/ContainedButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

type SnackBarProps = {
  message?: string;
  onClose?: () => void;
  open?: boolean;
};

const BaseSnackbar = styled(props => <Snackbar {...props} />)`
  && {
    bottom: 0;
  }

  & [class*='MuiSnackbarContent-root'] {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 8px 17px -4px rgba(130, 142, 148, 0.35),
      0 0 4px 0 rgba(130, 142, 148, 0.16), 0 0 2px 0 rgba(130, 142, 148, 0.12);
    flex-wrap: nowrap;
    padding: 0 32px;
  }

  & [class*='MuiSnackbarContent-message'] {
    padding-left: 0px;
    padding-top: 28px;
    padding-bottom: 28px;
  }

  & [class*='MuiSnackbarContent-action'] {
    padding-left: 64px;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  color: black;
`;

export const CookieDialog = (props: SnackBarProps) => {
  const [open, setOpen] = React.useState(props.open);
  const { message, onClose, ...other } = props;

  function handleClose(event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <BaseSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={null}
      onClose={handleClose}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar">
            <Typo variant="body1">
              The website uses cookies for tracking statistics. Read{' '}
              <Link>Grand Bargains data privacy</Link> for more details.
            </Typo>
          </span>
        }
        action={[<ContainedButton text="Accept" onClick={handleClose} />]}
        {...other}
      />
    </BaseSnackbar>
  );
};

