import React, { FC } from 'react';
import { getUriImage } from '~/services/image';
import { TMovie } from '~/types/TMovie';
import { Text } from '../Text';

import { Wrapper, Image } from './styles';
type TCardMovie = {
  itemMovie: TMovie;
  onPress: () => void;
};

export const CardMovie: FC<TCardMovie> = ({
  itemMovie,
  onPress,
}): JSX.Element => {
  return (
    <Wrapper onPress={onPress}>
      <Image source={{ uri: getUriImage('w400', itemMovie.poster_path) }} />
      <Text color="primary">{itemMovie.title}</Text>
      <Text color="primary">{itemMovie.release_date.slice(0, 4)}</Text>
    </Wrapper>
  );
};
