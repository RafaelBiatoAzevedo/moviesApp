import { api } from '~/services/api';
import { API_KEY } from '@env';
import { movie } from '~/types/movie';

export const getPopularMovies = async (): Promise<movie[]> => {
  const response = await api.get(
    `/movie/popular?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data.results;
};

export const getLatestMovies = async (): Promise<movie[]> => {
  const response = await api.get(
    `/movie/latest?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data.results;
};

export const getTopRatedMovies = async (): Promise<movie[]> => {
  const response = await api.get(
    `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data.results;
};

export const getNowPlayngMovies = async (): Promise<movie[]> => {
  const response = await api.get(
    `/movie/now_playing?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data.results;
};

export const getUpcomingMovies = async (): Promise<movie[]> => {
  const response = await api.get(
    `/movie/upcoming?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data.results;
};
