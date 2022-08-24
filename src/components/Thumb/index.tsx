import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image } from './Thumb.styles';
//Types
type Props = {
  image: string,
  movieId?: number,
  ccc?: string,
  clickable: boolean,
}

const Thumb: React.FC<Props> = ({ image, movieId, ccc, clickable }) => {
  return (
    <div className={ccc && `${ccc}`}>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb'/>
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb'/>
      )}
    </div>
  );
};

export default Thumb;
