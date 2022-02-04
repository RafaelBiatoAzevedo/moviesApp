import React, { FC } from 'react';
import { ColorScheme, FontsSizesScheme } from 'styled-components';
import { Text } from '../Text';

import { Wrapper } from './styles';

interface IButton {
  backgroundColor?: string;
  flex?: number;
  flexDirection?: string;

  fontColor?: ColorScheme;
  fontSize?: FontsSizesScheme;
  fontWeight?: string;

  icon?: JSX.Element;

  mLeft?: string;
  mRight?: string;
  mBottom?: string;
  mTop?: string;
  mY?: string;
  mX?: string;
  m?: string;

  onPress: any;

  paddingX?: string;
  paddingY?: string;

  title?: string | JSX.Element;

  width?: string;
  withBorder?: boolean;
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
