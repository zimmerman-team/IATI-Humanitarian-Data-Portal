import React from 'react';
import styled from 'styled-components';
import colors from 'app/theme/color';
import Typography from '@material-ui/core/Typography';
import { Visibility } from '@material-ui/icons';

const Message =
  'Mobiles are great! But, not so for viewing large data sets. Revist the page on a larger device to see the data, all the content, and graphs.';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purplebase};
  padding: 24px;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
`;

const Text = styled(props => <Typography {...props} />)`
  color: ${colors.whiteOrFontlightbase};
  display: flex;
  align-items: center;
`;

const Icon = styled(props => <Visibility {...props} />)`
  color: ${colors.whiteOrFontlightbase};
  //  margin-top: 16px;
  margin-right: 24px;

  && {
    height: 1.7em;
    width: 1.7em;
  }
`;

const MobileDialog = () => {
  return (
    <ContentContainer>
      <Icon />
      <Text variant="body2">{Message}</Text>
    </ContentContainer>
  );
};
export default MobileDialog;
