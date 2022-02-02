import { TMoviesState } from '~/types/TRootState';

const INITIAL_MOVIES_STATE: TMoviesState = {
  popularMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
};

export const movies = (state = INITIAL_MOVIES_STATE, action: any) => {
  switch (action.type) {
    case 'SAVE_POPULAR_MOVIES':
      return { ...state, popularMovies: action.movies };
    case 'SAVE_TOP_RATED_MOVIES':
      return { ...state, topRatedMovies: action.movies };
    case 'SAVE_NOW_PLAYING_MOVIES':
      return { ...state, nowPlayingMovies: action.movies };
    case 'SAVE_UPCOMING_MOVIES':
      return { ...state, upcomingMovies: action.movies };
    default:
      return state;
  }
};
