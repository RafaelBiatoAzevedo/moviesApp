import axios from 'axios';
import { API_URI } from '@env';

export const api = axios.create({
  baseURL: API_URI,
});
