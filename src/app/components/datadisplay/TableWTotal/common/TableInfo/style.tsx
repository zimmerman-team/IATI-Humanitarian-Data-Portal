import styled from 'styled-components';
import color from 'app/theme/color';
import { Typography } from 'app/theme';

export const TableInfoContainer = styled.div`
  bottom: 123px;
  display: flex;
  flex-wrap: wrap;
  min-height: 56px;
  position: relative;
  background-color: ${color.tableInfoDark};
`;

interface InfoItemStyleModel {
  margin: string;
}
export const InfoItemContainer = styled.div`
  display: flex;
  font-family: ${Typography.fontFamily};
  font-size: ${Typography.fontSize}px;
  font-weight: ${Typography.fontWeightMedium};
  color: ${color.whiteOrFontlightbase};
  margin: ${(props: InfoItemStyleModel) => props.margin};
`;

export const InfoItemValue = styled.div`
  &:first-child {
    margin-right: 12px;
  }
`;
