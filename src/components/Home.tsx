import React from 'react';
//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
//hook
import { useHomeFetch } from '../hooks/useHomeFetch';
//image
import NoImage from '../images/no_image.jpg';
import {useParams} from "react-router-dom";
import hImage from "../images/cinema-header.jpg";

const Home: React.FC = () => {
  const { genreTerm } = useParams();
  const {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch(genreTerm? genreTerm : "");


  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>

        <HeroImage
          image={hImage}
        />

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm || genreTerm ? (searchTerm ? `Suche nach "${searchTerm}"`: `${genreTerm}` ) : 'Popular Movies'}>
        {state.results.map(movie => (
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
      {state.page < state.total_pages && !isLoading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  );
};

export default Home;
