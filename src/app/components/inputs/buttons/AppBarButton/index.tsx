import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LocationDescriptor } from 'history';

type Props = {
  size?: string;
  label?: string;
  url?: LocationDescriptor<any>;
};

const BaseComponent = styled(props => <Button {...props} />)`
  && {
    margin-left: 40px;
    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }

    &:hover {
      background-color: initial;
    }
  }
`;

const CustomLink = styled(props => <NavLink {...props} />)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #25a898;
  }
`;

const AppBarButton = (props: Props) => {
  return (
    <BaseComponent size={props.size} color="inherit" {...props}>
      <CustomLink to={props.url ? props.url : '/'}>{props.label}</CustomLink>
    </BaseComponent>
  );
};

export default AppBarButton;
