import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Colours from 'app/theme/color';
import Box from '@material-ui/core/Box';
import { DonutChartModel } from './model';

const SIZE = 158;

const Container =  styled(props => <Box {...props} />)`
  position: relative;
  height: ${SIZE}px;
  width: ${SIZE}px;
`;

const BackgroundDonut = styled(props => <CircularProgress {...props} />)`
  position: absolute;
  &&{
    color: ${Colours.greylight30OrFontdisablet};
  }
`;

const ProgressDonut = styled(props => <CircularProgress {...props} />)`
  position: absolute;
  &&{
    transform: rotate(90deg) !important;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  position: absolute;
  left: calc(${SIZE}px / 2);
  transform: translateX(-50%) translateY(-50%);
  top: calc(${SIZE}px / 2);
  color: black;
`;

// https://material-ui.com/components/progress/#CircularStatic.js
// Animated value going from 0 to value?
const DonutChart = (props: DonutChartModel) => {
  // Switch between these code lines for animation.
  const [completed, setCompleted] = React.useState(props.value);
  // const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted => (prevCompleted >= props.value ? props.value : prevCompleted + 10));
    }

    const timer = setInterval(progress, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <BackgroundDonut variant="static" value={100} size={SIZE} thickness={5}/>
      <ProgressDonut variant="static" value={completed} size={SIZE} thickness={5} />
      <Typo variant="h6">{props.value}%</Typo>
    </Container>
  );
};

export default DonutChart;
