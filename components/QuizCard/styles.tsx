import styled from 'styled-components';

export const Card = styled.div`
  width: 700px;
  height: 500px;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 0px 24px 43px -20px rgba(0, 0, 0, 0.71);
  box-shadow: 0px 24px 43px -20px rgba(0, 0, 0, 0.71);
  padding: 2rem;

  @media (max-width: 750px) {
    height: 100vh;
    width: 100%;
    border-radius: 0;
    text-align: center;
  }
`;
