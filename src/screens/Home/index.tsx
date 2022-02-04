import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TRootStackParamList } from '~/types/TRootStackParamList';

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieDetails,
} from '~/services/movies';
import {
  addMovieSlected,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  saveGenres,
  saveMovies,
} from '~/redux/actions';
import { getGenres } from '~/services/genres';
import { TRootState } from '~/types/TRootState';
import { TMovie } from '~/types/TMovie';

import { TopMenu } from '~/components/TopMenu';
import { Text } from '~/components/Text';
import { FlatList } from '~/components/FlatList';

import { Loading, Wrapper, WrapperScroll } from './styles';
import { TMoviesToRender } from '~/types/TMoviesToRender';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { movies, filters, genres } = useSelector((state: TRootState) => state);
  const [moviesToRender, setMoviesToRender] = useState<TMoviesToRender>({
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
  });

  const filterMovies = useCallback(
    async (listMovies: TMovie[]): Promise<TMovie[]> => {
      let moviesFiltered = listMovies;

      if (filters.title !== '') {
        moviesFiltered = moviesFiltered.filter((movie) =>
          movie.title.toLowerCase().includes(filters.title.toLowerCase())
        );
      }

      if (filters.genres.length > 0) {
        const codeListGenres = filters.genres.map(
          (genreFilter) =>
            genres.find((genre) => genreFilter === genre.name)?.id
        );

        moviesFiltered = moviesFiltered.filter((movie) =>
          movie.genre_ids.some((id) => codeListGenres.includes(id))
        );
      }

      if (filters.releaseYears.length > 0) {
        moviesFiltered = moviesFiltered.filter((movie) =>
          filters.releaseYears.some(
            (year) => year === movie.release_date.slice(0, 4)
          )
        );
      }

      if (filters.voteAverageSort === 'ASC') {
        moviesFiltered = moviesFiltered.sort((movieA, movieB) => {
          if (movieA.vote_average > movieB.vote_average) {
            return -1;
          } else {
            return 1;
          }
        });
      } else {
        moviesFiltered = moviesFiltered.sort((movieA, movieB) => {
          if (movieA.vote_average > movieB.vote_average) {
            return 1;
          } else {
            return -1;
          }
        });
      }

      return moviesFiltered;
    },
    [filters, genres]
  );

  useEffect(() => {
    Promise.all([
      getPopularMovies(1),
      getTopRatedMovies(1),
      getNowPlayingMovies(1),
      getUpcomingMovies(1),
    ]).then((resp) =>
      dispatch(
        saveMovies({
          popularMovies: { movies: resp[0], nextPage: 2 },
          topRatedMovies: { movies: resp[1], nextPage: 2 },
          nowPlayingMovies: { movies: resp[2], nextPage: 2 },
          upcomingMovies: { movies: resp[3], nextPage: 2 },
        })
      )
    );

    getGenres().then((resp) => dispatch(saveGenres(resp)));
  }, [dispatch]);

  useEffect(() => {
    Promise.all([
      filterMovies(movies.popularMovies.movies),
      filterMovies(movies.topRatedMovies.movies),
      filterMovies(movies.nowPlayingMovies.movies),
      filterMovies(movies.upcomingMovies.movies),
    ]).then((resp) =>
      setMoviesToRender({
        popularMovies: resp[0],
        topRatedMovies: resp[1],
        nowPlayingMovies: resp[2],
        upcomingMovies: resp[3],
      })
    );
  }, [movies, filterMovies]);

  const navigation =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handlePressMovie = async (movieId: number): Promise<void> => {
    const movie = await getMovieDetails(movieId);

    await dispatch(addMovieSlected(movie));
    navigation.navigate('Movie');
  };

  const handlePressPlusMovies = async (typeMovies: string): Promise<void> => {
    let newMovies: TMovie[] = [];

    switch (typeMovies) {
      case 'popularMovies':
        newMovies = await getPopularMovies(movies.popularMovies.nextPage);
        dispatch(addPopularMovies(newMovies));
        break;
      case 'topRatedMovies':
        newMovies = await getTopRatedMovies(movies.topRatedMovies.nextPage);
        dispatch(addTopRatedMovies(newMovies));
        break;
      case 'nowPlayingMovies':
        newMovies = await getNowPlayingMovies(movies.nowPlayingMovies.nextPage);
        dispatch(addNowPlayingMovies(newMovies));
        break;
      case 'upcomingMovies':
        newMovies = await getUpcomingMovies(movies.upcomingMovies.nextPage);
        dispatch(addUpcomingMovies(newMovies));
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <TopMenu />
      <WrapperScroll>
        <Text color="primary" size="medium">
          Mais Populares
        </Text>
        {moviesToRender.popularMovies.length === 0 ? (
          <Loading size="large" color="#fff" />
        ) : (
          <FlatList
            handlePressMovie={(movieId: number) => handlePressMovie(movieId)}
            handlePressPlusMovies={(typeMovies: string) =>
              handlePressPlusMovies(typeMovies)
            }
            listMovies={[
              ...moviesToRender.popularMovies,
              {
                id: Math.random() * 2,
                title: 'plusMovies',
                original_title: 'popularMovies',
              } as TMovie,
            ]}
          />
        )}
        <Text color="primary" size="medium">
          Top do Ranking
        </Text>
        {moviesToRender.topRatedMovies.length === 0 ? (
          <Loading size="large" color="#fff" />
        ) : (
          <FlatList
            handlePressMovie={(movieId: number) => handlePressMovie(movieId)}
            handlePressPlusMovies={(typeMovies: string) =>
              handlePressPlusMovies(typeMovies)
            }
            listMovies={[
              ...moviesToRender.topRatedMovies,
              {
                id: Math.random() * 2,
                title: 'plusMovies',
                original_title: 'topRatedMovies',
              } as TMovie,
            ]}
          />
        )}
        <Text color="primary" size="medium">
          Agora nos Cinemas
        </Text>
        {moviesToRender.nowPlayingMovies.length === 0 ? (
          <Loading size="large" color="#fff" />
        ) : (
          <FlatList
            handlePressMovie={(movieId: number) => handlePressMovie(movieId)}
            handlePressPlusMovies={(typeMovies: string) =>
              handlePressPlusMovies(typeMovies)
            }
            listMovies={[
              ...moviesToRender.nowPlayingMovies,
              {
                id: Math.random() * 2,
                title: 'plusMovies',
                original_title: 'nowPlayingMovies',
              } as TMovie,
            ]}
          />
        )}
        <Text color="primary" size="medium">
          Lançamentos no Cinema
        </Text>
        {moviesToRender.upcomingMovies.length === 0 ? (
          <Loading size="large" color="#fff" />
        ) : (
          <FlatList
            handlePressMovie={(movieId: number) => handlePressMovie(movieId)}
            handlePressPlusMovies={(typeMovies: string) =>
              handlePressPlusMovies(typeMovies)
            }
            listMovies={[
              ...moviesToRender.upcomingMovies,
              {
                id: Math.random() * 2,
                title: 'plusMovies',
                original_title: 'upcomingMovies',
              } as TMovie,
            ]}
          />
        )}
      </WrapperScroll>
    </Wrapper>
  );
};
