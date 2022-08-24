import styled from "styled-components";
import gSprite from '../../images/gSprite2.jpg';
export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 10px 50px;
  @media screen and (min-width: 769px) {
    padding: 0 20px 50px;
  }
  div div {
    display: inline-block;
    position: relative;

    text-align: left;
    background: #000;
    border: 1px solid #e72787;
     &:not(.genreGrid):not(.actor):after {
       background: url("${gSprite}") no-repeat  0 0 / 500% auto;
       height: 80px;
       width: 80px;
       display: inline-block;
       float: right;
       content:"";
    }

    &:not(.genreGrid):nth-child(2):after {
      background: url("${gSprite}") -80px 0 / 500% auto;
    }

    &:not(.genreGrid):nth-child(3):after {
      background: url("${gSprite}") -80px  -85px / 500% auto;
    }
    &:not(.genreGrid):nth-child(4):after {
      background: url("${gSprite}") -160px  0 / 500% auto;
    }
    &:not(.genreGrid):nth-child(5):after {
      background: url("${gSprite}") -160px  -520px / 500% auto;
    }
    &:not(.genreGrid):nth-child(6):after {
      background: url("${gSprite}") -240px -600px / 500% auto;
    }
    &:not(.genreGrid):nth-child(7):after {
      background: url("${gSprite}") -240px  0 / 500% auto;
    }
    &:not(.genreGrid):nth-child(8):after {
      background: url("${gSprite}") 0  -610px  / 500% auto;
    }
    &:not(.genreGrid):nth-child(9):after {
      background: url("${gSprite}") -320px  -600px / 500% auto;
    }
    &:not(.genreGrid):nth-child(10):after {
      background: url("${gSprite}") -80px  -605px  / 500% auto;
    }
    &:not(.genreGrid):nth-child(11):after {
      background: url("${gSprite}") -160px  -605px / 500% auto;
    }
    &:not(.genreGrid):nth-child(12):after {
      background: url("${gSprite}") -160px  -85px / 500% auto;
    }
    &:not(.genreGrid):nth-child(13):after {
      background: url("${gSprite}") 0 -85px / 500% auto;
    }
    &:not(.genreGrid):nth-child(14):after {
      background: url("${gSprite}") -80px  -515px / 500% auto;
    }
    &:not(.genreGrid):nth-child(15):after {
      background: url("${gSprite}") -320px  0 / 500% auto;
    }
    &:not(.genreGrid):nth-child(16):after {
      background: url("${gSprite}") -320px -515px / 500% auto;
    }
    &:not(.genreGrid):nth-child(17):after {
      background: url("${gSprite}") -240px -85px / 500% auto;
    }
    &:not(.genreGrid):nth-child(18):after {
      background: url("${gSprite}") -320px  -85px  / 500% auto;
    }
    &:not(.genreGrid):nth-child(19):after {
      background: url("${gSprite}") 0 -175px / 500% auto;
    }
    @media screen and (min-width: 769px) {
      display: block;
      
      transition: border-color 0.2s ease-out, background 0.2s ease-out;
      &:not(.genreGrid):hover {
        border: 1px solid #FFF;
        background: #FFF;
      }
    }
    a  {
      text-decoration: none;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 5px;
      display: inline-block;
      
    p {
      transform: scale(1);
      transform-origin: left center;
      margin: 0 0 0 0;
      color: #FFF;
      font-family: 'Bree Serif', serif;
      transition: color 0.2s ease-out, transform 0.2s ease-out;
    }
    
  }
    &:hover h3 {
      color: #e72787;
      
    }
    &:hover p {
      color: #000;

    }
    &.genreGrid {
    border: 0;
    
      a {
      padding:0;
        position: relative;
     }
     
    }
    
  }

  h1 {
    color: var(--white);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 0.5rem;
  @media screen and (min-width: 380px) {
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(187px, 1fr));
  }
`;
