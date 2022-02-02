import React, { FC } from 'react';
import { getUriImage } from '~/services/image';
import { movie } from '~/types/movie';
import { Text } from '../Text';

import { Wrapper, Image } from './styles';
type TCardMovie = {
  itemMovie: movie;
};

export const CardMovie: FC<TCardMovie> = ({ itemMovie }): JSX.Element => {
  return (
    <Wrapper>
      <Image source={{ uri: getUriImage('w4000', itemMovie.poster_path) }} />
      <Text color="primary">{itemMovie.title}</Text>
      <Text color="primary">{itemMovie.release_date.slice(0, 4)}</Text>
    </Wrapper>
  );
};
