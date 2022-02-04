import { api } from '~/services/api';
import { API_KEY } from '@env';
import { TMovie } from '~/types/TMovie';

export const getMovieDetails = async (movieId: number): Promise<TMovie> => {
  const response = await api.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
  );

  return response.data;
};

export const getPopularMovies = async (page: number): Promise<TMovie[]> => {
  const response = await api.get(
    `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  return response.data.results;
};

export const getTopRatedMovies = async (page: number): Promise<TMovie[]> => {
  const response = await api.get(
    `/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  return response.data.results;
};

export const getNowPlayingMovies = async (page: number): Promise<TMovie[]> => {
  const response = await api.get(
    `/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  return response.data.results;
};

export const getUpcomingMovies = async (page: number): Promise<TMovie[]> => {
  const response = await api.get(
    `/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  return response.data.results;
};
