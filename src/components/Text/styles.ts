import { ColorScheme, FontsSizesScheme } from 'styled-components';
import styled from 'styled-components/native';

type TStyledText = {
  weight: string;
  color: ColorScheme;
  size: FontsSizesScheme;
  align: string;
  paddingY: string;
  paddingX: string;
};

export const StyledText = styled.Text<TStyledText>`
  color: ${(p) => p.theme.colors[p.color]};
  font-size: ${(p) => p.theme.fontSizes[p.size]}px;
  font-weight: ${(p) => p.weight};
  text-align: ${(p) => p.align};
  padding: ${(p) => p.theme.responsive.wp(p.paddingY)}px
    ${(p) => p.theme.responsive.wp(p.paddingX)}px;
`;
