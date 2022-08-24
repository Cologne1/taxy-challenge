import React from 'react';
import { Link } from 'react-router-dom';

import tio from '../../images/tio.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={tio} alt='taxy.io logo' />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;
