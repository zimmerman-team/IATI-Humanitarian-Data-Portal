import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { InPageNavModel } from './model';
import ButtonDown from '@material-ui/icons/ArrowDownward';
import ButtonUp from '@material-ui/icons/ArrowUpward';
import { scroller } from 'react-scroll';

/* utils */
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import get from 'lodash/get';

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

export function InPageNavigation(props: InPageNavModel) {
  const initVal = props.lists[0] ? props.lists[0].elName : 'none';

  const [currentLocation, setCurrentLocation] = React.useState(initVal);

  useEffect(() => {
    if (currentLocation === 'none' && props.lists[0]) {
      let defSelect = props.lists[0].elName;
      if (props.dontShow) {
        const itemWData = find(
          props.lists,
          list =>
            (list.items && list.items.length > 0) ||
            (list.tableCItems && list.tableCItems.length > 0)
        );
        defSelect = get(itemWData, 'elName', 'none');
      }
      setCurrentLocation(defSelect);
    }
  }, [props.lists]);

  const currLocInd = findIndex(props.lists, ['elName', currentLocation]);

  function scrollToLoc(elName: string) {
    scroller.scrollTo(elName, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50, // Scrolls to element + 50 pixels down the page
    });
  }

  function handleClickControl(direction: string) {
    let newLoc = currentLocation;

    if (direction === 'down' && currLocInd + 1 !== props.lists.length) {
      newLoc = props.lists[currLocInd + 1].elName;
      scrollToLoc(newLoc);
    }

    if (direction === 'up' && currLocInd - 1 > -1) {
      newLoc = props.lists[currLocInd - 1].elName;
      scrollToLoc(newLoc);
    }

    setCurrentLocation(newLoc);
  }

  function handleClick(elName: string) {
    setCurrentLocation(elName);
    scrollToLoc(elName);
  }

  return (
    <>
      <div
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        {props.lists.map((list, index) => {
          if (
            !props.dontShow ||
            (list.items && list.items.length > 0) ||
            (list.tableCItems && list.tableCItems.length > 0)
          ) {
            if (list.elName === currentLocation) {
              return (
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  marginBottom="25px"
                >
                  <Rectangle />
                  <CurrentLink variant="subtitle2">{list.title}</CurrentLink>
                </Box>
              );
            }

            return (
              <BaseLink
                key={`in-page-menu-item-${index}`}
                variant="subtitle2"
                onClick={() => handleClick(list.elName)}
              >
                {list.title}
              </BaseLink>
            );
          }
        })}
      </div>
      <Controls>
        <ButtonUp
          fontSize="large"
          onClick={() => handleClickControl('up')}
          color={currLocInd === 0 ? 'disabled' : undefined}
        />
        <ButtonDown
          fontSize="large"
          onClick={() => handleClickControl('down')}
          color={currLocInd === props.lists.length - 1 ? 'disabled' : undefined}
        />
      </Controls>
    </>
  );
}
