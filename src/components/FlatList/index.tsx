import React, { FC } from 'react';
import { TMovie } from '~/types/TMovie';
import { CardMovie } from '../CardMovie';

import { Wrapper } from './styles';

type TFlatList = {
  listMovies: TMovie[];
};

export const FlatList: FC<TFlatList> = ({ listMovies }): JSX.Element => {
  return (
    <Wrapper
      data={listMovies}
      renderItem={({ item }: any) => <CardMovie itemMovie={item} />}
      keyExtractor={(item: any) => item.id}
      horizontal={true}
    />
  );
};
