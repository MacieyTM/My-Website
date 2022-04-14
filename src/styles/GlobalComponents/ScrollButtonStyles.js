import styled from 'styled-components';

export const Button = styled.div`
  @media screen and (min-width: 1300px) {
    position: fixed;
    /* width: 100%; */
    left: 90%;
    bottom: 40px;
    height: 40px;
    font-size: 4rem;
    z-index: 1;
    color: white;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
