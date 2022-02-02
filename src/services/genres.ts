import { api } from '~/services/api';
import { API_KEY } from '@env';
import { TGenre } from '~/types/TGenre';

export const getGenres = async (): Promise<TGenre[]> => {
  const genres = await api.get(
    `/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
  );

  return genres.data.genres;
};
