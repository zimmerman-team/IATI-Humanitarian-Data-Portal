import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Color = {
  inherit: "inherit",
  primary: "primary",
  secondary: "secondary",
  default: "default"
};
type Props = {
  text: string;
  color?: keyof typeof Color;
  disabled?: boolean;
};

const BaseContainedButton = styled(props => <Button {...props} />)`
  //& [class*='MuiSnackbarContent-root'] {
  //  padding: 8px 24px;
  //}
`;

const ContainedButton = (props: Props) => {
  return (
    <BaseContainedButton variant={"contained"} color={props.color} disabled={props.disabled}>{props.text}</BaseContainedButton>
  );
};

export default ContainedButton;
