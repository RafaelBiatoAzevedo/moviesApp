import { TGenre } from '~/types/TGenre';

const INITIAL_GENRES_STATE: TGenre[] = [];

export const genres = (state = INITIAL_GENRES_STATE, action: any) => {
  switch (action.type) {
    case 'SAVE_GENRES':
      return [...action.genres];
    default:
      return state;
  }
};
