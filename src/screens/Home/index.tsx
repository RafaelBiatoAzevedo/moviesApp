import React, { FC } from 'react';
import { TopMenu } from '~/components/TopMenu';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';
import { FlatList } from '~/components/FlatList';

export const Home: FC = () => {
  return (
    <Wrapper>
      <TopMenu />
      <Text color="primary">Os Mais Populares</Text>
      <FlatList listMovies={} />
    </Wrapper>
  );
};
