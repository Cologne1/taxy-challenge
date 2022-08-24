// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string = "1d99cabd8522d86bb9cb929bd3595754";

const SEARCH_BASE_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=1d99cabd8522d86bb9cb929bd3595754&with_genres=`;
const GENRE_URL: string = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=de-DE`;
const SEARCH_MOVIE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=de-DE&query=`;
// For login and voting
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
  SEARCH_BASE_URL,
  SEARCH_MOVIE_URL,
  GENRE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
