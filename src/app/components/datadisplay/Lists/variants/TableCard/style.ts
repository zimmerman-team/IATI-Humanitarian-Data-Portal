import styled from 'styled-components';
import { Base, TableTitle } from '../../index';
import { TableHeadProps } from '@material-ui/core/TableHead';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import ArrowUp from '@material-ui/icons/ArrowDropUp';
import { PaperProps } from '@material-ui/core/Paper';
import color from 'app/theme/color';

interface CardContainerModel extends PaperProps {
  open?: boolean;
  fullWidth?: boolean;
}

export const CardContainer = styled(Base)`
  padding: ${(props: CardContainerModel) =>
    props.open ? '8px 28px 32px 28px' : '8px 28px'};
  width: ${(props: CardContainerModel) => (props.fullWidth ? '100%' : 'unset')};
  overflow-x: auto;
`;

interface CardHeadModel extends TableHeadProps {
  border?: boolean;
  expandable?: boolean;
}

export const CardHead = styled.div`
  display: flex;
  padding: 14px 0;
  border-bottom: ${(props: CardHeadModel) =>
    props.border ? `${color.paleGrey} 3px solid;` : 'none'};
  cursor: ${(props: CardHeadModel) =>
    props.expandable ? 'pointer' : 'initial'};
`;

export const ArrowStyleDown = styled(ArrowDown)`
  margin-left: auto;
  color: ${color.black};
`;

export const ArrowStyleUp = styled(ArrowUp)`
  margin-left: auto;
  color: ${color.black};
`;

export const ArrowContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
