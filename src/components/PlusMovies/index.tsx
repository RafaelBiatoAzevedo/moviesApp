import React, { FC } from 'react';
import { Text } from '../Text';
import IconCirclePlus from 'react-native-vector-icons/FontAwesome5';

import { Wrapper } from './styles';
import { useTheme } from 'styled-components';

type TPlusMovie = {
  onPress: () => void;
};

export const PlusMovies: FC<TPlusMovie> = ({ onPress }): JSX.Element => {
  const { colors, responsive } = useTheme();
  return (
    <Wrapper onPress={onPress}>
      <IconCirclePlus
        name="plus-circle"
        color={colors.primary}
        size={responsive.wp('10%')}
      />
      <Text color="primary" size="small" paddingY="2%">
        Mais Filmes
      </Text>
    </Wrapper>
  );
};
