import { TFilters } from '~/types/TFilters';

const INITIAL_FILTERS_STATE: TFilters = {
  title: '',
  genres: [],
  releaseYears: [],
  voteAverageSort: 'ASC',
};

export const filters = (state = INITIAL_FILTERS_STATE, action: any) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return { ...state, title: action.title };
    case 'SET_GENRES_FILTER':
      return { ...state, genres: action.genres };
    case 'SET_RELEASE_YEARS_FILTER':
      return { ...state, releaseYears: action.years };
    case 'SET_VOTE_AVERAGE_FILTER':
      return { ...state, voteAverageSort: action.sort };
    case 'RESET_FILTERS':
      return INITIAL_FILTERS_STATE;
    default:
      return state;
  }
};
