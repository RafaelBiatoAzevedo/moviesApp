import { TGenre } from '~/types/TGenre';
import { TMovie } from '~/types/TMovie';

import { ValueType } from 'react-native-dropdown-picker';
import { TMoviesState } from '~/types/TRootState';

export const saveMovies = (movies: TMoviesState) => ({
  type: 'SAVE_MOVIES',
  movies,
});

export const addPopularMovies = (movies: TMovie[]) => ({
  type: 'ADD_POPULAR_MOVIES',
  movies,
});

export const addTopRatedMovies = (movies: TMovie[]) => ({
  type: 'ADD_TOP_RATED_MOVIES',
  movies,
});

export const addNowPlayingMovies = (movies: TMovie[]) => ({
  type: 'ADD_NOW_PLAYING_MOVIES',
  movies,
});

export const addUpcomingMovies = (movies: TMovie[]) => ({
  type: 'ADD_UPCOMING_MOVIES',
  movies,
});

export const addMovieSlected = (movie: TMovie) => ({
  type: 'ADD_MOVIE_SELECTED',
  movie,
});

export const removeMovieSlected = () => ({
  type: 'REMOVE_MOVIE_SELECTED',
});

export const saveGenres = (genres: TGenre[]) => ({
  type: 'SAVE_GENRES',
  genres,
});

export const setTitleFilter = (title: string) => ({
  type: 'SET_TITLE_FILTER',
  title,
});

export const setGenresFilter = (genres: ValueType[] | null) => ({
  type: 'SET_GENRES_FILTER',
  genres,
});

export const setReleaseYearsFilter = (years: ValueType[] | null) => ({
  type: 'SET_RELEASE_YEARS_FILTER',
  years,
});

export const setVoteAverageFilter = (sort: string) => ({
  type: 'SET_VOTE_AVERAGE_FILTER',
  sort,
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS',
});
