import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Colours from 'app/theme/color';
import { DonutChartModel } from 'app/components/charts/DonutChart/model';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const mdUpSize = 158;
const mdDownSize = 128;

const Container = styled(props => <div {...props} />)`
  position: relative;
  @media (max-width: 960px) {
    height: ${mdDownSize}px;
    width: ${mdDownSize}px;
    min-width: ${mdDownSize}px;
  }

  height: ${mdUpSize}px;
  width: ${mdUpSize}px;
  min-width: ${mdUpSize}px;
`;

const BackgroundDonut = styled(props => <CircularProgress {...props} />)`
  position: absolute;
  && {
    color: ${Colours.greylight30OrFontdisablet};
  }
`;

const ProgressDonut = styled(props => <CircularProgress {...props} />)`
  position: absolute;
  && {
    transform: rotate(90deg) !important;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  position: absolute;
  left: calc(${mdUpSize}px / 2);
  transform: translateX(-50%) translateY(-50%);
  top: calc(${mdUpSize}px / 2);
  color: black;

  @media (max-width: 960px) {
    left: calc(${mdDownSize}px / 2);
    top: calc(${mdDownSize}px / 2);
  }
`;

// https://material-ui.com/components/progress/#CircularStatic.js
// Animated value going from 0 to value?
export const DonutChart = (props: DonutChartModel) => {
  // Switch between these code lines for animation.
  const [completed, setCompleted] = React.useState(props.value);
  // const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted =>
        prevCompleted >= props.value ? props.value : prevCompleted + 10
      );
    }

    const timer = setInterval(progress, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <BackgroundDonut
        variant="static"
        value={100}
        size={matches ? 158 : 128}
        thickness={5}
      />
      <ProgressDonut
        variant="static"
        value={props.value}
        size={matches ? 158 : 128}
        thickness={5}
      />
      <Typo variant="h6">{props.value}%</Typo>
    </Container>
  );
};
