import React, { FC } from 'react';
import { TMovie } from '~/types/TMovie';
import { CardMovie } from '../CardMovie';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { addMovieSlected } from '~/redux/actions';

import { Wrapper } from './styles';
import { TRootStackParamList } from '~/types/TRootStackParamList';
import { getMovieDetails } from '~/services/movies';

type TFlatList = {
  listMovies: TMovie[];
};

export const FlatList: FC<TFlatList> = ({ listMovies }): JSX.Element => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handlePressMovie = async (movieId: number): Promise<void> => {
    const movie = await getMovieDetails(movieId);

    await dispatch(addMovieSlected(movie));
    navigation.navigate('Movie');
  };

  return (
    <Wrapper
      data={listMovies}
      renderItem={({ item }: any) => (
        <CardMovie onPress={() => handlePressMovie(item.id)} itemMovie={item} />
      )}
      keyExtractor={(item: any) => item.id}
      horizontal={true}
    />
  );
};
