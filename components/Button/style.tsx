import styled from 'styled-components';

export const ButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  background-color: #75c5ff;
  color: white;
  width: 250px;
  height: 50px;
  font-size: 1.2rem;
  font-weight: 300;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #40a9f3;
  }

  &:disabled {
    background-color: #c5c5c5;
    cursor: not-allowed;
  }
`;
