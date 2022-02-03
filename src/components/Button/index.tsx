import React, { FC } from 'react';
import { ColorScheme, FontsSizesScheme } from 'styled-components';
import { Text } from '../Text';

import { Wrapper } from './styles';

interface IButton {
  title?: string | JSX.Element;
  onPress: any;
  fontColor?: ColorScheme;
  fontSize?: FontsSizesScheme;
  fontWeight?: string;
  width?: string;
  icon?: JSX.Element;
  isRotate?: boolean;
  flex?: number;
  backgroundColor?: string;
  withBorder?: boolean;
  flexDirection?: string;

  mLeft?: string;
  mRight?: string;
  mBottom?: string;
  mTop?: string;
  mY?: string;
  mX?: string;
  m?: string;

  paddingX?: string;
  paddingY?: string;
}

export const Button: FC<IButton> = ({
  title,
  onPress,
  fontColor,
  fontSize,
  fontWeight = '400',
  width = 'auto',
  icon,
  flex,
  mRight,
  mLeft,
  mBottom,
  mTop,
  backgroundColor,
  withBorder,
  flexDirection = 'row',
  paddingY = '0%',
  paddingX = '0%',
}): JSX.Element => {
  return (
    <Wrapper
      flexDirection={flexDirection}
      withBorder={withBorder}
      backgroundColor={backgroundColor}
      mBottom={mBottom}
      mTop={mTop}
      mRight={mRight}
      mLeft={mLeft}
      width={width}
      onPress={onPress}
      flex={flex}
      paddingY={paddingY}
      paddingX={paddingX}
    >
      {icon}
      <Text color={fontColor} size={fontSize} weight={fontWeight}>
        {title}
      </Text>
    </Wrapper>
  );
};
