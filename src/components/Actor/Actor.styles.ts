import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  padding: 0px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
    padding: 0px 5px;
    font-size: 0.875rem;
    @media screen and (min-width: 769px) {
      font-size: 1.1rem;
    }
  }

  p {
    margin: 5px;
    color: var(--white);
    font-size: 0.75rem;
    @media screen and (min-width: 769px) {
      font-size: 1rem;
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
