import { TGenre } from './TGenre';

type TCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  homepage: string;
  imdb_id: string;
  production_companies: TCompany[];
  production_countries: [];
  revenue: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  belongs_to_collection: {};
  genres: TGenre[];
};
