import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/ArrowForward';
import { Palette } from 'app/theme';

type Props = {
  text: string;
  disabled?: boolean;
  //TODO::  Refactor to ...other or ...children
  onClick?: any;
};

const BaseContainedButton = styled(props => <Button {...props} />)`
  padding: 12px 15px !important;
  box-shadow: none !important;
  &:hover{
  background-color: ${Palette.primary.light} !important;
  }
  
  & [class*='MuiButton-label'] {
    text-transform: none;
    min-width: 102px;
    justify-content: space-between;
  }   
`;

const ContainedButton = (props: Props) => {
  const { text, disabled, ...other } = props;

  return (
    <BaseContainedButton variant={"contained"} color="primary" disabled={disabled} disableRipple {...other}>
      {text}
      <Icon fontSize="small">send</Icon>
    </BaseContainedButton>
  );
};

export default ContainedButton;
