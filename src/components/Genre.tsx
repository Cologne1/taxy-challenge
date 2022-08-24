import React from 'react';
//components
import HeroImage from './HeroImage';
import hImage from './../images/cinema-header.jpg';
import Grid from './Grid';
import Entry from './Entry';
//hook
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";
import {useHomeFetch} from "../hooks/useHomeFetch";
import Thumb from "./Thumb";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import NoImage from "../images/no_image.jpg";
import Button from "./Button";

const GenreOV: React.FC = () => {
  const { genreTerm } = useParams();
  const {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch(genreTerm? genreTerm : "");


  if (isError) return <div>Fehler...</div>;

  return (
    <>
        <HeroImage
          image={hImage}
        />

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={!searchTerm ? 'Genres' : `Suche nach "${searchTerm}"`}>
        {!searchTerm && state.genres.map(genre => (
          <Entry
            key={genre.id}
            name={genre.name}
            clickable
            id={genre.id}

          />
        ))}
        {searchTerm && state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            ccc='genreGrid'
            image={
              movie.poster_path ?
                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                :
                NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {isLoading && <Spinner/>}
      {state.page < state.total_pages && !isLoading && searchTerm && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  );
};

export default GenreOV;
