import React, { FC } from 'react';

import { ColorScheme, FontsSizesScheme } from 'styled-components';

import { StyledText } from './styles';

export type TText = {
  align?: string;
  color?: ColorScheme;
  paddingY?: string;
  paddingX?: string;
  size?: FontsSizesScheme;
  weight?: string;
};

export const Text: FC<TText> = ({
  children,
  align = 'left',
  color = 'textPattern',
  paddingY = '0%',
  paddingX = '0%',
  size = 'small',
  weight = '400',
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
