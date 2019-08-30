import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { LinkCellModuleModel } from 'app/components/datadisplay/Table/model';
import { Typography } from 'app/theme';
import color from 'app/theme/color';

const CustomLink = styled(props => <Link {...props} />)`
  font-family: ${Typography.fontFamily};
  font-size: ${Typography.body2.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${color.branddark};
`;

const LinkCellModule = (props: LinkCellModuleModel) => {
  return <CustomLink to={props.link}>{props.value}</CustomLink>;
};

export default LinkCellModule;
