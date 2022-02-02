import { TMovie } from '~/types/TMovie';

export const savePopularMovies = (movies: TMovie[]) => ({
  type: 'SAVE_POPULAR_MOVIES',
  movies,
});

export const saveTopRatedMovies = (movies: TMovie[]) => ({
  type: 'SAVE_TOP_RATED_MOVIES',
  movies,
});

export const saveNowPlayingMovies = (movies: TMovie[]) => ({
  type: 'SAVE_NOW_PLAYING_MOVIES',
  movies,
});

export const saveUpcomingMovies = (movies: TMovie[]) => ({
  type: 'SAVE_UPCOMING_MOVIES',
  movies,
});
