import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

type Props = {
  text: string;
  disabled?: boolean;
  //TODO::  Refactor to ...other or ...children
  onClick?: any;
};

const BaseContainedButton = styled(props => <Button {...props} />)`
  padding: 12px 15px !important;
  
  & [class*='MuiButton-label'] {
    min-width: 102px;
    text-transform: none;
  }   
`;

const ContainedButton = (props: Props) => {
  const { text, disabled, ...other } = props;

  return (
    <BaseContainedButton variant={"contained"} color="primary" disabled={disabled} disableRipple {...other}>{text}</BaseContainedButton>
  );
};

export default ContainedButton;
