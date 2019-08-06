import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { SignatoryNavigationModel } from './model';
import { Container } from '@material-ui/core';

const LocationLink = styled(props => <Link {...props} />)`
  && {
  color: rgba(1, 1, 10, 0.6);
  padding-right: 32px;
  margin-bottom: 20px;
  
  :hover{
    cursor: pointer;
    text-decoration: none;
  }
  }
`;

const CurrentLocationLink = styled(props => <Link {...props} />)`
  && {
  color: ${Colors.black};
  padding-right: 32px;
  margin-bottom: 20px;
  
  :hover{
    cursor: default;
    text-decoration: none;
  }
  }
`;

const Underline = styled(props => <div {...props} />)`
  //display: ${props => props.display ? "block" : "none"};
  background-color: ${props => props.display ? Colors.primaryBase : "transparent"};
  height: 4px;
  margin-top: 8px;
`;

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items#Creating_gutters_between_items
const Box = styled(props => <Container {...props} />)`
  && {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  }
`;

//TODO: Implement current location retrieving
const CURRENT_LOCATION = "Overview";

export function SignatoryNavigation(props: SignatoryNavigationModel) {
  const [currentLocation, setCurrentLocation] = useState(CURRENT_LOCATION);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, location: string) {
    event.preventDefault();
    setCurrentLocation(location);
  }

  return (
        <Box>
          {props.locations.map( location => {
            if(currentLocation === location){
             return <CurrentLocationLink variant="button">{location}<Underline display/></CurrentLocationLink>
            }
            return <LocationLink variant="button" onClick={(e) => handleClick(e, location)}>{location}<Underline/></LocationLink>
          })}
        </Box>
  );
}
