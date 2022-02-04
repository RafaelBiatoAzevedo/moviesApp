import { TMoviesState } from '~/types/TRootState';

const INITIAL_MOVIES_STATE: TMoviesState = {
  popularMovies: { movies: [], nextPage: 1 },
  topRatedMovies: { movies: [], nextPage: 1 },
  nowPlayingMovies: { movies: [], nextPage: 1 },
  upcomingMovies: { movies: [], nextPage: 1 },
};

export const movies = (state = INITIAL_MOVIES_STATE, action: any) => {
  switch (action.type) {
    case 'SAVE_MOVIES':
      return { ...action.movies };
    case 'ADD_POPULAR_MOVIES':
      return {
        ...state,
        popularMovies: {
          movies: [...state.popularMovies.movies, ...action.movies],
          nextPage: (state.popularMovies.nextPage += 1),
        },
      };
    case 'ADD_TOP_RATED_MOVIES':
      return {
        ...state,
        topRatedMovies: {
          movies: [...state.topRatedMovies.movies, ...action.movies],
          nextPage: (state.topRatedMovies.nextPage += 1),
        },
      };
    case 'ADD_NOW_PLAYING_MOVIES':
      return {
        ...state,
        nowPlayingMovies: {
          movies: [...state.nowPlayingMovies.movies, ...action.movies],
          nextPage: (state.nowPlayingMovies.nextPage += 1),
        },
      };
    case 'ADD_UPCOMING_MOVIES':
      return {
        ...state,
        upcomingMovies: {
          movies: [...state.upcomingMovies.movies, ...action.movies],
          nextPage: (state.upcomingMovies.nextPage += 1),
        },
      };
    default:
      return state;
  }
};
