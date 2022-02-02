import { movie } from '~/types/movie';

const INITIAL_STATE: movie[] = [];

export const movies = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
