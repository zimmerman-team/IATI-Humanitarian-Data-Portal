import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { Grid, Link, useMediaQuery } from '@material-ui/core';
import { Breakpoints } from 'app/theme';
import DIImage from 'app/assets/images/Development Initiatives Logo.png';
import DMImage from 'app/assets/images/Dutch Minsitry of Foreign Affairs Logo.png';
import WBImage from 'app/assets/images/World Bank Group.png';
import useTheme from '@material-ui/core/styles/useTheme';

const Wrapper = styled(props => <Grid {...props} />)`
  && {
    background-color: ${Colors.branddark};
    padding: 32px 54px;
    left: 0;
    bottom: 0;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${Breakpoints.sm}px) {
      justify-content: center;
    }
  }
`;

const PrivacyLink = styled(props => <NavLink {...props} />)`
  text-align: center;
  font-size: ${props => (props.smDown ? '0.85rem' : '1rem')};
  font-weight: 500;
  line-height: 1.5;
  font-family: Inter;
  letter-spacing: 0.5px;
  color: ${Colors.whiteOrFontlightbase};

  &&:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${Colors.whiteOrFontlightbase};
  }
`;

const LinkContainer = styled(props => <Grid {...props} />)`
  @media (max-width: ${Breakpoints.sm}px) {
    && {
      margin-top: 62px;
    }
  }
`;

export const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper container item xs={12} spacing={2}>
      <Grid item>
        <Link data-testid="DI link" href="http://devinit.org/" target="_blank">
          <img
            src={DIImage}
            width="100%"
            height="auto"
            alt="Development Initiatives Logo"
          />
        </Link>
      </Grid>

      <Grid item>
        <Link
          data-testid="GOV link"
          href="https://www.government.nl/ministries/ministry-of-foreign-affairs"
          target="_blank"
        >
          <img
            src={DMImage}
            width="100%"
            height="auto"
            alt="Dutch Ministry of Foreign Affairs Logo"
          />
        </Link>
      </Grid>

      <Grid item>
        <Link
          data-testid="World bank link"
          href="https://www.worldbank.org/"
          target="_blank"
        >
          <img
            src={WBImage}
            width="100%"
            height="auto"
            alt="World Bank Group Logo"
          />
        </Link>
      </Grid>

      <LinkContainer item>
        <PrivacyLink data-testid="GB link" to="/privacy" smDown={matches}>
          Grand Bargains Data Privacy and Cookie Policy
        </PrivacyLink>
      </LinkContainer>
    </Wrapper>
  );
};
