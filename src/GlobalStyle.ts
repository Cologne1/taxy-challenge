import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --rail-width: 5rem;
    background: #000;
  }
  @keyframes shine {
    100% {
      top: 0%; 
    } 
  }
  @keyframes  moveReel {
    from {
      background-position: 0px -48px;
    }
    to {
      background-position: 0px 0px;
    }
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
html {
  position: relative;
  z-index: 2;
  @media screen and (min-width: 769px) {
   

  &::before, &::after  {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0%;
    right: calc(100% - 2 * var(--rail-width));
    overflow: hidden;
    width: var(--rail-width);
    height: 100%;
    transform: skew(-10deg);
    transform-origin: top right;
    background-image: linear-gradient(to right, #0000, #FFFFFF60, #0000);
    pointer-events: none;
    animation: shine 6.75s cubic-bezier(.01,.56,1,1)infinite;
  }
  &::after  {
    right: auto;
    left: calc(100% - 2 * var(--rail-width));
    top: 0%;
    transform: skew(10deg);
    transform-origin: top left;

  }
  }
}
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background:#000;
    position: relative;
    z-index: 3;
    overflow-x: hidden;
    @media screen and (min-width: 769px) {
      margin: 0 5rem;
      &::before, &::after {
        position: absolute;
        content: '';
        z-index: 3;
        top: -150%;
        opacity: 0.9;
        left: -5rem;
        width: var(--rail-width);
        bottom: 0;
        background-color: #000;
        background-size: var(--rail-width);
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='18'><rect x=\\"0\\" y=\\"0\\" width=\\"30\\" height=\\"18\\" fill=\\"black\\" /><rect  x=\\"14\\" y=\\"5\\" width=\\"10\\" height=\\"8\\" rx=\\"1\\" fill=\\"white\\" /></svg>");
        animation-name: moveReel;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-fill-mode: none;
      }

      &::after {
        right: -5rem;
        left: auto;
        transform: rotatez(180deg);
        transform-origin: center;

      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h1,h2,h3,h4,h5 {
      font-family: 'Bree Serif', serif;
      letter-spacing: 0.05rem;
      -webkit-font-smoothing: antialiased;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--darkGrey);
    }
    
  }
`;
