import React, { FC } from 'react';

import { StyledText } from './styles';
import { ColorScheme, FontsSizesScheme } from 'styled-components';

export type TText = {
  weight?: string;
  color?: ColorScheme;
  size?: FontsSizesScheme;
  align?: string;
  paddingY?: string;
  paddingX?: string;
};

export const Text: FC<TText> = ({
  children,
  weight = '400',
  color = 'textPattern',
  size = 'small',
  align = 'left',
  paddingY = '0%',
  paddingX = '0%',
}): JSX.Element => {
  return (
    <StyledText
      allowFontScaling={false}
      align={align}
      size={size}
      color={color}
      weight={weight}
      paddingY={paddingY}
      paddingX={paddingX}
    >
      {children}
    </StyledText>
  );
};
