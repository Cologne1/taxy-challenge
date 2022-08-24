import React from 'react';
import { Link } from 'react-router-dom';
//Types
type Props = {
  name: string,
  id?: number,
  ccc? : string,
  clickable: boolean,
}

const Entry: React.FC<Props> = ({ name, id, ccc, clickable }) => {
  return (
    <div className={ccc && `${ccc}`}>
        <Link to={`/genre/${name}`}>
          <p>{name}</p>
        </Link>
    </div>
  );
};

export default Entry;
