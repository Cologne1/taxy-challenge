import styled from 'styled-components';
// Types
type Props = {
  image: string,
}

export const Wrapper = styled.div<Props>`
  background: linear-gradient(
    to bottom, rgba(0, 0, 0, 0) 41%,
    rgba(0, 0, 0, 0.65) 100%
  ),
    url(${({ image }) => image }), var(--darkGrey);
  background-size: 100%, cover;
  background-position: top center;
  height: 200px;
  position: relative;
  animation: animateHeroImage 1s;
  @media screen and (min-width: 501px) {
    height: 400px;
  }

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
