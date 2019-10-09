import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Card as MuiCard } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';

const Card = styled(props => <MuiCard {...props} />)`
  && {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
  }
`;

const Content = styled(props => <CardContent {...props} />)`
  && {
    display: flex;
    flex-direction: column;
    padding: 37px 108px;

    :last-child {
      padding-bottom: 37px;
    }
  }
`;

export const ActivityDetailsHeaderCard = (
  props: ActivityDetailsHeaderCardModel
) => {
  return (
    <Card>
      <Content flexDirection="column">
        <Typography variant="overline" style={{ marginBottom: '24px' }}>
          {`${props.organisation.name} ${props.organisation.code}`}
        </Typography>

        <Typography variant="h3">{props.activity.title}</Typography>

        <Box display="flex" marginTop="35px">
          <Typography variant="overline">{props.activity.code}</Typography>

          <Box display="flex" marginLeft="58px">
            <Typography variant="subtitle1" style={{ marginRight: '9px' }}>
              Activity Dates
            </Typography>
            <Typography variant="overline">
              {`${props.activity.startDate} to ${props.activity.endDate}`}
            </Typography>
          </Box>
        </Box>
      </Content>
    </Card>
  );
};
