import React from 'react';
import styled from 'styled-components';
import MuiBox from '@material-ui/core/Box';
import Colors from 'app/theme/color';
import MuiLink from '@material-ui/core/Link';
import Close from '@material-ui/icons/Close';

const Box = styled(props => <MuiBox {...props} />)`
  && {
    background-color: ${Colors.branddark};
    padding: 32px 54px;
  }
`;

const Link = styled(props => <MuiLink {...props} />)`
  && {
    //Type specific
    font-family: Inter;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: ${Colors.whiteOrFontlightbase};
    :hover {
      cursor: pointer;
    }
  }
`;

export function Footer() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Link>
        <Close />
        {/*  SVG */}
        {/*http://devinit.org/wp-content/themes/diTheme/img/logo.png*/}
      </Link>

      <Link>
        <Close />
        {/*  SVG */}
        {/*Grand Bargins Data Privacy and Cookie Policy*/}
      </Link>

      <Link>Grand Bargins Data Privacy and Cookie Policy</Link>
    </Box>
  );
}
