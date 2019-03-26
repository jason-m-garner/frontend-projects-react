import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { size } from 'polished';
import LogoSvg from '../svg/Logo';

const LogoWrapper = styled.div`
  ${size('26px', 'auto')};
  svg {
    ${size('100%', 'auto')};
  }
  ${media.greaterThan('small')`
    ${size('50px', 'auto')};
  `}
`;

const LogoHeading = styled.h1`
  font-size: 0;
  height: 100%;
  line-height: 100%;
  margin: 0;
`;

const Logo = ({ white }) => {
  return (
    <LogoWrapper>
      <LogoHeading title="Huddle">
        <a href="/" title="Huddle">
          <LogoSvg white={white} />
        </a>
      </LogoHeading>
    </LogoWrapper>
  );
};

export default Logo;
