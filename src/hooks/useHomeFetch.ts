import { useState, useEffect } from "react";
import API, { Movie, Genre } from '../API';

const initialState = {
  page: 0,
  results: [] as Movie[],
  genres: [] as Genre[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = (genreTerm: string) => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ state, setState ] = useState(initialState);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  const [ isLoadingMore, setIsLoadingMore ] = useState(false);
  const fetchMovies = async (page: number, searchTerm: string, genreTerm: string) => {
    const genres = await API.fetchGenres()
    const genrename = Object.values(genres.genres).find(x => x.name === genreTerm);
    try {
      setIsError(false);
      setIsLoading(true);

      const gID = genrename? genrename.id : "0";
      const movies = await API.fetchMovies(searchTerm, page, `${gID}`);

      setState(prev => ({
        ...movies,
        ...genres,
        results:
          page > 1 ? [ ...prev.results, ...movies.results ] : [ ...movies.results ]
      }));


    } catch (error) {
      setIsError(true);
    };
    setIsLoading(false);
  };

  // initial and search
  useEffect(() => {
    fetchMovies(1, searchTerm, genreTerm);
  }, [searchTerm, genreTerm]);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm, genreTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page, genreTerm]);

  //write to sessionStorage
  useEffect(() => {
    if (!searchTerm && !genreTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state, genreTerm])

  return {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  }; // es6 syntax
};
