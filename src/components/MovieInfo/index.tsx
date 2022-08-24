import React from 'react';
//components
import Thumb from '../Thumb';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
import { Link } from 'react-router-dom';
//styles
import { BC, Wrapper, Content, Text } from './MovieInfo.styles';
// Types
import { MovieState } from '../../hooks/useMovieFetch';

type Props = {
  movie: MovieState,
}

const MovieInfo: React.FC<Props> = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <BC>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movie.title}</span>
    </BC>
      <Content>
      <Thumb
        image={
          movie.poster_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>

        <p>{movie.overview}<br/>
          <a target="_blank"
             rel="noreferrer"
             href={`https://www.youtube-nocookie.com/embed/${movie.videos?.results?.find((element: { name: string; }) => element.name.toLowerCase() === 'Offizieller Trailer'.toLowerCase())?.key}`}
          >Trailer &#10146;</a>
        </p>

        <div className='rating-directors'>
          <div>
            <h3>BEWERTUNG</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='director'>
            <h3>REGIE</h3>
            {movie.directors?.map(director => (

              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
          <div className='director'>
            <h3>GENRE</h3>
            {

              <p key={movie.genres?.[0].id}>{movie.genres?.[0].name}</p>
            }
          </div>
        </div>

      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;