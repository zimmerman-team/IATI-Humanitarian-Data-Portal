import React from 'react';
import {ExpansionPanel as MuiExpansionPanel } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import {ExpansionPanelModel} from './model'

const BaseExpansionPanel = styled(props => <MuiExpansionPanel {...props} />)` 
  margin-bottom: 8px;
  &&{
  box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
  }
  
  &&::before{
    height: 0; 
  }

  & [class*='MuiExpansionPanelSummary-content']{
    margin: 28px 0;
  }
     
  & [class*='MuiExpansionPanelSummary-content Mui-expanded']{
    margin: 28px 0 !important;
  }  
  
  & [class*='MuiButtonBase-root'] {
    padding: 0 32px;
  }  
  
  & [class*='MuiExpansionPanelSummary-root Mui-expanded']{
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
  }  
  
  & [class*='MuiExpansionPanelDetails-root']{
    padding: 32px;
  }  
`;
const BaseExpandIcon = styled(props => <ExpandMoreIcon {...props} />)` 
  color: black;
`;

const ExpansionPanel = (props: ExpansionPanelModel) => {
  return (
    <div>
      {props.questions.map( question =>
        <BaseExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<BaseExpandIcon fontSize="large"/>}
          >
            <Typography variant="subtitle1">{question.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">
              {question.answer}
            </Typography>
          </ExpansionPanelDetails>
        </BaseExpansionPanel>
      )}
    </div>
  )
};

export default ExpansionPanel;
