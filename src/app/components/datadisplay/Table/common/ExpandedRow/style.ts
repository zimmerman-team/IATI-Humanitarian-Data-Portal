import styled from 'styled-components';
import color from 'app/theme/color';
import { Typography, Palette } from 'app/theme';

interface RowContainerModel {
  hover?: boolean;
}

export const RowContainer = styled.tr`
  cursor: ${(props: RowContainerModel) =>
    props.hover ? 'pointer' : 'initial'};
  background-color: ${color.whiteOrFontlightbase};
  border-bottom: 3px solid rgba(224, 224, 224, 0.4);
  &:hover {
    background-color: ${(props: RowContainerModel) =>
      props.hover ? Palette.action.hover : color.whiteOrFontlightbase};
  }
`;

export const LinkContainer = styled.div`
  margin: 15px 0 15px 64px;
  width: fit-content;
`;

export const CellItem = styled.div`
  padding: 14px 40px 14px 23px;
  font-family: ${Typography.fontFamily};
  font-size: ${Typography.body2.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${Palette.text.primary};
`;
