import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
}

export const ContainerBarProgression = styled.div<ProgressBarProps>`
  width: ${(props) => `${props.progress}%`};
  height: 100%;
  background-color: #75c5ff;
  border-radius: 10px;
`;

export const ContainerBackgroundBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e9e9e9;
  border-radius: 10px;
`;
