import React, { FC } from 'react';
import { TMovie } from '~/types/TMovie';
import { CardMovie } from '../CardMovie';

import { Wrapper } from './styles';

import { PlusMovies } from '../PlusMovies';

type TFlatList = {
  listMovies: TMovie[];
  handlePressPlusMovies: (typeMovies: string) => void;
  handlePressMovie: (movieId: number) => void;
};

export const FlatList: FC<TFlatList> = ({
  listMovies,
  handlePressMovie,
  handlePressPlusMovies,
}): JSX.Element => {
  return (
    <Wrapper
      data={listMovies}
      renderItem={({ item }: any) => {
        if (item.title === 'plusMovies') {
          return (
            <PlusMovies
              onPress={() => handlePressPlusMovies(item.original_title)}
            />
          );
        } else {
          return (
            <CardMovie
              onPress={() => handlePressMovie(item.id)}
              itemMovie={item}
            />
          );
        }
      }}
      keyExtractor={(item: any) => item.id}
      horizontal={true}
    />
  );
};
