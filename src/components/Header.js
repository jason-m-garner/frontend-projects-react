import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import media from 'styled-media-query';
import Button from './Button';

const HeaderWrapper = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  grid-area: header;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.desktop};
  padding: 20px;
  width: 100%;
  ${media.greaterThan('small')`
   padding: 40px 20px;
  `}
`;

const HeaderCTA = styled.div`
  justify-self: end;
`;

const HeaderButton = styled(Button)`
  ${media.lessThan('small')`
    padding: 8px 24px;
  `}
`;

const Header = () => {
  return (
    <HeaderWrapper role="banner">
      <Logo />
      <HeaderCTA>
        <HeaderButton as="a" href="/">
          Try It For Free
        </HeaderButton>
      </HeaderCTA>
    </HeaderWrapper>
  );
};

export default Header;
