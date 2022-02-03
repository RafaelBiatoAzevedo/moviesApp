const INITIAL_MOVIE_STATE = {};

export const movie = (state = INITIAL_MOVIE_STATE, action: any) => {
  switch (action.type) {
    case 'ADD_MOVIE_SELECTED':
      return { ...action.movie };
    case 'REMOVE_MOVIE_SELECTED':
      return {};
    default:
      return state;
  }
};
