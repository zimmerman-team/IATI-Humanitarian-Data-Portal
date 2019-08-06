import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Colors from 'app/theme/color';
import { InPageNavModel, LocationModel } from './model';
import ButtonDown from '@material-ui/icons/ArrowDownward'
import ButtonUp from '@material-ui/icons/ArrowUpward'

const BaseLink = styled(props => <Link {...props} />)`
  && {
  color: rgba(1, 1, 10, 0.6);
  padding-left: 32px;
  padding-bottom: 25px;
  :hover{
    cursor: pointer;
    text-decoration: none;
  }
  }
`;

const CurrentLink = styled(props => <Link {...props} />)`
  && {
  color: ${Colors.branddark};
  padding-bottom: 25px;
    :hover{
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

const LinksContainer = styled(props => <Box {...props} />)`
  && {
  display: flex;
  flex-direction: column;
  }
`;

const Controls = styled(props => <Box {...props} />)`
  && {
  padding-left: 32px;
  display: flex;
  flex-direction: row;
  > *{
    margin-right: 24px;
  }
  }
`;

const LOCATION = "#activity_summary";

export function InPageNavigation(props: InPageNavModel) {
  const [locations, setLocations] = React.useState();
  const [currentLocation, setCurrentLocation] = React.useState(LOCATION);

  function handleClickUp(location: LocationModel ){
    setCurrentLocation("");
  }

  function handleClickDown(url: string){
    setCurrentLocation("");
  }

  function handleClick(url: string) {
    setCurrentLocation(url);
  }

  return (
    <Box>
      <LinksContainer>
        {props.locations.map( location => {
          if(location.url === currentLocation){
            return(
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
            <Rectangle/>
            <CurrentLink variant="subtitle2" >{location.label}</CurrentLink>
            </div>)
            }
          
            return <BaseLink variant="subtitle2" onClick={() => handleClick(location.url)}>{location.label}</BaseLink>
        })}
      </LinksContainer>
      <Controls>
        <ButtonUp fontSize="large" onClick={handleClickUp}/>
        <ButtonDown fontSize="large" onClick={handleClickDown} color="disabled"/>
      </Controls>
    </Box>
  );
}
