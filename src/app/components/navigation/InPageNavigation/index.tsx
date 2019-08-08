import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { InPageNavModel, LocationModel } from './model';
import ButtonDown from '@material-ui/icons/ArrowDownward';
import ButtonUp from '@material-ui/icons/ArrowUpward';

//TODO: FUNCTIONALITY LIST AFTER DISCUSSION
// If this component hits the top of the page, the components sticks there.
// Every navigation link should link to the appropriate card.
// Controls up and down should go to approprioate card.
// Max number of 6 links is shown at a time.

const BaseLink = styled(props => <Link {...props} />)`
  && {
    color: ${Colors.black};
    padding-left: 32px;
    margin-bottom: 25px;
    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const CurrentLink = styled(props => <Link {...props} />)`
  && {
    :hover {
      cursor: default;
      text-decoration: none;
    }
  }
`;

const Rectangle = styled.div`
  width: 24px;
  height: 8px;
  background-color: ${Colors.brandbase};
  margin-right: 8px;
`;

const Controls = styled(props => <Box {...props} />)`
  && {
    padding-left: 32px;
    display: flex;
    flex-direction: row;
    > * {
      margin-right: 24px;
    }
  }
`;

const LOCATION = '#activity_summary';

export function InPageNavigation(props: InPageNavModel) {
  const [currentLocation, setCurrentLocation] = React.useState(LOCATION);

  function handleClickControl(direction: string) {
    setCurrentLocation('');
  }

  function handleClick(url: string) {
    setCurrentLocation(url);
  }

  return (
    <>
      <Box display="flex" flexDirection="column">
        {props.locations.map(location => {
          if (location.url === currentLocation) {
            return (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginBottom="25px"
              >
                <Rectangle />
                <CurrentLink variant="subtitle2">{location.label}</CurrentLink>
              </Box>
            );
          }

          return (
            <BaseLink
              variant="subtitle2"
              onClick={() => handleClick(location.url)}
            >
              {location.label}
            </BaseLink>
          );
        })}
      </Box>
      <Controls>
        <ButtonUp fontSize="large" onClick={() => handleClickControl('up')} />
        <ButtonDown
          fontSize="large"
          onClick={() => handleClickControl('down')}
          color="disabled"
        />
      </Controls>
    </>
  );
}
