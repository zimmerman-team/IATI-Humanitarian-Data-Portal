/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import MuiBox from '@material-ui/core/Box';
import Colors from 'app/theme/color';
import MuiLink from '@material-ui/core/Link';
import { DILogo } from 'app/components/svgs/DevelopmentInitiatives';
import { MONLogo } from 'app/components/svgs/MinistryOfNetherlands';

const Box = styled(props => <MuiBox {...props} />)`
  && {
    background-color: ${Colors.branddark};
    padding: 32px 54px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: calc(100% - 108px);
  }
`;

const Link = styled(props => <MuiLink {...props} />)`
  && {
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

export const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      data-testid="Footer"
    >
      <Link
        data-testid="DI link"
        href="http://devinit.org/"
      >
        <DILogo />
      </Link>

      <Link
        data-testid="GOV link"
        href="https://www.government.nl/ministries/ministry-of-foreign-affairs"
      >
        <MONLogo />
      </Link>

      <Link
        data-testid="GB link"
        href="/privacy"
      >
        Grand Bargains Data Privacy and Cookie Policy
      </Link>
    </Box>
  );
};
