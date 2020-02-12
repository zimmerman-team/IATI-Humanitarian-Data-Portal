import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ContainedButton from 'app/components/inputs/buttons/ContainedButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { Palette } from 'app/theme';

const MessageContainer = styled(props => <Box {...props} />)`
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: normal;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  && {
    color: ${Palette.grey[900]};
    margin-right: 32px;
    align-self: center;
    @media (max-width: 960px) {
      margin-bottom: 8px;
    }
  }
`;

const Button = styled(props => <ContainedButton {...props} />)`
  && {
    height: 48px;
    min-width: 146px;
    @media (max-width: 960px) {
      margin-bottom: 8px;
    }
  }
`;

type MessageProps = {
  onClose?: () => void;
};

export const Message = (props: MessageProps) => {
  return (
    <MessageContainer display="flex">
      <Typo variant="body1" color="primary">
        The website uses cookies for tracking statistics. Read{' '}
        <Link to="/privacy">Grand Bargains data privacy</Link> for more details.
      </Typo>
      <Button text="Accept" onClick={props.onClose} />
    </MessageContainer>
  );
};
