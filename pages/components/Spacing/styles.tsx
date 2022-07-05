import styled from 'styled-components';

interface Props {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const MarginSpacing = styled.div<Props>`
  margin-top: ${(p) => `${p.top}rem`};
  margin-left: ${(p) => `${p.left}rem`};
  margin-right: ${(p) => `${p.right}rem`};
  margin-bottom: ${(p) => `${p.bottom}rem`};
`;

export const PaddingSpacing = styled.div<Props>`
  padding-top: ${(p) => `${p.top}rem`};
  padding-left: ${(p) => `${p.left}rem`};
  padding-right: ${(p) => `${p.right}rem`};
  padding-bottom: ${(p) => `${p.bottom}rem`};
`;
