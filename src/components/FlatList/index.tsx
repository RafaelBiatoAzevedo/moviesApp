import React, { FC } from 'react';
import { movie } from '~/types/movie';
import { CardMovie } from '../CardMovie';

import { Wrapper } from './styles';

type TFlatList = {
  listMovies: movie[];
};

export const FlatList: FC<TFlatList> = ({ listMovies }): JSX.Element => {
  return (
    <Wrapper
      data={listMovies}
      renderItem={({ item }: any) => <CardMovie itemMovie={item} />}
      keyExtractor={(item: any) => item.id}
    />
  );
};
