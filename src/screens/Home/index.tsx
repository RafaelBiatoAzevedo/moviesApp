import React, { FC } from 'react';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';

export const Home: FC = () => {
  return (
    <Wrapper>
      <Text color="primary" align="center" size="veryLarge" paddingY="2%">
        MoviesApp
      </Text>
    </Wrapper>
  );
};
