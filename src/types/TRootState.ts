import { TMovie } from './TMovie';

export type TMoviesState = {
  popularMovies: TMovie[];
  topRatedMovies: TMovie[];
  nowPlayingMovies: TMovie[];
  upcomingMovies: TMovie[];
};
export type TRootState = {
  movies: TMoviesState;
};
