import styled from 'styled-components';
import color from 'app/theme/color';
import { Typography, Palette } from 'app/theme';

export const RowContainer = styled.tr`
  background-color: ${color.whiteOrFontlightbase};
  border-bottom: 3px solid rgba(224, 224, 224, 0.4);
`;

export const LinkContainer = styled.div`
  margin: 15px 0 15px 64px;
  width: fit-content;
`;

export const CellItem = styled.div`
  padding-right: 40px;
  padding-left: 23px;
  font-family: ${Typography.fontFamily};
  font-size: ${Typography.body2.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${Palette.text.primary};
`;
