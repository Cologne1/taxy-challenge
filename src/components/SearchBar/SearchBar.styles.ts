import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 10px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  margin: 0 auto;
  color: var(--white);
  &::after {
    content:"";
    width:0;
    height:1px;
    background: var(--white);
    position: absolute;
    bottom: 0;
    left:0;
    transition: width 0.6s ease-in-out;
  }
  &:hover:after {
    width:100%;
  }

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
