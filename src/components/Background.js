import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const Square = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 100px;
  top: 200px;
  right: 200px;
  background: #fff;
  height: 750px;
  width: 750px;
  transform: rotate(45deg);
  ${media.greaterThan('medium')`
     
    `}
`;

const GradientSquare = styled(Square)`
  z-index: 2;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 75%
  );
  width: 1000px;
  height: 1000px;
  top: -475px;
  right: -475px;
  ${media.greaterThan('medium')`
     
  `}
`;

const Background = () => {
  return (
    <Wrapper>
      <Square />
      <GradientSquare />
    </Wrapper>
  );
};

export default Background;
