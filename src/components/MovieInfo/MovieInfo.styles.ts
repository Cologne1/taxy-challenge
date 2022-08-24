import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Types
type Props = {
  backdrop: string,
}

export const Wrapper = styled.div<Props>`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
  };
  background-size: cover;
  background-position: center;
 
  animation: animateMovieInfo 1s;
  
  @media screen and (min-width: 769px) {
    padding: 20px;
  }

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: block;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.9);

  @media screen and (min-width: 769px) {
    max-height: none;
    display: flex;
  }
`;

export const BC = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 10px;
  mix-blend-mode: difference;
  @media screen and (min-width: 769px) {
  
    padding: 0 20px 20px;
  }

  span {
   
    font-size: var(--fontSmall);
    color: var(--white);
    padding-right: 10px;

    @media screen and (min-width: 769px) {
      font-size: var(--fontMed);
 
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 10px 10px;
  color: var(--white);
  overflow: hidden;
  @media screen and (min-width: 769px) {
    padding: 20px 40px;
  }
  h3 {color: #e72787;}
  p, p a {
    margin: 0;
    color: var(--white);
    line-height: 1.7em;
    padding-bottom: 30px;
    text-decoration: none;
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    color: var(--white);
    & > div {
      width: 33%;
      text-align: center;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    background: #fff;
    color: #000;
    width: 60px;
    font-weight: 800;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
  }
 
  .director {
    margin: 0 0 0 10px;
    width: 33%;
    text-align: center;
    & + .director {
      margin: 0;
    }

    @media screen and (min-width: 769px) {
      margin: 0 0 0 40px;
      & + .director {
        margin: 0 0 0 40px;
      }
    }
  }
`;
