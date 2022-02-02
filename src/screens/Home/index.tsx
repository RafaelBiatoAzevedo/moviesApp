import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TopMenu } from '~/components/TopMenu';
import { Text } from '~/components/Text';

import { Wrapper, WrapperScroll } from './styles';
import { FlatList } from '~/components/FlatList';
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from '~/services/movies';
import {
  savePopularMovies,
  saveTopRatedMovies,
  saveNowPlayingMovies,
  saveUpcomingMovies,
} from '~/redux/actions';
import { TRootState } from '~/types/TRootState';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: TRootState) => state.movies);

  useEffect(() => {
    getPopularMovies().then((resp) => dispatch(savePopularMovies(resp)));
    getTopRatedMovies().then((resp) => dispatch(saveTopRatedMovies(resp)));
    getNowPlayingMovies().then((resp) => dispatch(saveNowPlayingMovies(resp)));
    getUpcomingMovies().then((resp) => dispatch(saveUpcomingMovies(resp)));
  }, [dispatch]);

  return (
    <Wrapper>
      <TopMenu />
      <WrapperScroll>
        <Text color="primary" size="medium">
          Mais Populares
        </Text>
        <FlatList listMovies={movies.popularMovies} />
        <Text color="primary" size="medium">
          Top do Ranking
        </Text>
        <FlatList listMovies={movies.topRatedMovies} />
        <Text color="primary" size="medium">
          Nos Cinemas
        </Text>
        <FlatList listMovies={movies.nowPlayingMovies} />
        <Text color="primary" size="medium">
          Lançamentos no Cinema
        </Text>
        <FlatList listMovies={movies.upcomingMovies} />
      </WrapperScroll>
    </Wrapper>
  );
};
