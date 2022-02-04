import { TMovie } from './TMovie';

export type TMoviesToRender = {
  popularMovies: TMovie[];
  topRatedMovies: TMovie[];
  nowPlayingMovies: TMovie[];
  upcomingMovies: TMovie[];
};
