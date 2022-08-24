import {
  SEARCH_BASE_URL,
  SEARCH_MOVIE_URL,
  GENRE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

// Types
export type Movie = {
  backdrop_path: string,
  id: number,
  genres: Genre[],
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  movie: string,
  title: string,
  videos: any,
  vote_average: number,
  budget: number,
  runtime: number,
  revenue: number,
}

export type Movies = {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number,
}
export type Genre = {
  id: number,
  name: string,
}
export type Genres = {
  genres: Genre[],
}
export type Cast = {
  character: string,
  credit_id: string,
  name: string,
  profile_path: string,
}

export type Crew = {
  job: string,
  name: string,
  credit_id: number,
}

export type Credits = {
  id: number,
  cast: Cast[],
  crew: Crew[],
}

const apiSettings = {
  fetchGenres: async (): Promise<Genres> => {
    const endpoint: string = `${GENRE_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovies: async (searchTerm: string, page: number, genreTerm: string): Promise<Movies> => {
    const endpoint: string = searchTerm
      ? `${SEARCH_MOVIE_URL}${searchTerm}&page=${page}&language=de-DE`
      : `${SEARCH_BASE_URL}${genreTerm}&page=${page}&language=de-DE`
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=de-DE&append_to_response=videos`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=de-DE`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (
      requestToken: string,
      username: string,
      password: string
    ) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  }
};

export default apiSettings;
