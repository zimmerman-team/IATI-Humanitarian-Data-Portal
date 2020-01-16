import React, { SyntheticEvent, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import styled from 'styled-components';

import useCookie from '@devhammed/use-cookie';
import { Message } from './common/message';
import MobileDialog from '../../MobileDialog';
import { Hidden } from '@material-ui/core';

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
    padding-top: 16px;
    padding-bottom: 16px;
  }

  & [class*='MuiSnackbarContent-action'] {
    padding-left: 64px;
  }
`;

export const CookieDialog = (props: SnackBarProps) => {
  /* this hook is for setting the cookie */
  const [cookie, setCookie] = useCookie('cookieNotice', 'true');
  /* this hook is for visually hiding the component */
  const [visible, setVisibility] = useState(cookie);

  const [open, setOpen] = React.useState(props.open);
  const { message, onClose, ...other } = props;

  function handleClose(event?: SyntheticEvent, reason?: string) {
    setCookie('false', {
      expires: 31536000 * 20,
      domain: '',
      path: '',
      secure: false,
      httpOnly: false,
      maxAge: 0,
      sameSite: '',
    });
    setVisibility(!visible);
  }

  return (
    visible &&
    (cookie && (
      <>
        <Hidden smUp>
          <MobileDialog />
        </Hidden>
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
            message={<Message onClose={handleClose} />}
            {...other}
          />
        </BaseSnackbar>
      </>
    ))
  );
};
