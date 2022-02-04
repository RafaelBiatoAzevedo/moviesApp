import { TFilters } from './TFilters';
import { TGenre } from './TGenre';
import { TMovie } from './TMovie';

export type TMoviesState = {
  popularMovies: { movies: TMovie[]; nextPage: number };
  topRatedMovies: { movies: TMovie[]; nextPage: number };
  nowPlayingMovies: { movies: TMovie[]; nextPage: number };
  upcomingMovies: { movies: TMovie[]; nextPage: number };
};

export type TRootState = {
  movies: TMoviesState;
  movie: TMovie;
  filters: TFilters;
  genres: TGenre[];
};
