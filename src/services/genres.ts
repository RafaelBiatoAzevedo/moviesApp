import { api } from '~/services/api';
import { API_KEY } from '@env';
import { genre } from '~/types/genre';

export const getGenres = async (): Promise<genre[]> => {
  const genres = await api.get(
    `/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
  );

  return genres.data.genres;
};
