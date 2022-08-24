import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  margin-left: 0px;
  position: relative;
  transform: scale(1) ;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  opacity: 0;
  animation: fadeIn 1.5s ease-out both;
  &:hover {
    transform: scale(1.1) ;
    }


  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

`;
