import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


type SnackBarProps = {
  message?: string;
  onClose?: () => void;
  open?: boolean;
};

const BaseSnackbar = styled(props => <Snackbar {...props} />)`
  && [class*='MuiSnackbarContent-root'] {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 8px 17px -4px rgba(130, 142, 148, 0.35), 0 0 4px 0 rgba(130, 142, 148, 0.16), 0 0 2px 0 rgba(130, 142, 148, 0.12);
    max-width: 1224px;
    width: 100%;
    padding: 0 32px;
  }

  & [class*="MuiSnackbarContent-message"] {
    padding: 28px;
  }
`;

const SnackBar = (props: SnackBarProps) => {
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
            <Typography variant="body1">The website uses cookies for tracking statistics. Read <Link>Grand Bargins data privacy</Link> for more details.</Typography>
          </span>
        }
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            Accept
          </Button>,
        ]}
        {...other}
      />
    </BaseSnackbar>
  );
};
export default SnackBar;
