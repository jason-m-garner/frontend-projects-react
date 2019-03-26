import React from 'react';
import styled from 'styled-components';

const LinksWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const IconLink = styled.a`
  font-size: 28px;
  margin-right: 12px;
`;

const SocialLinks = () => {
  return (
    <LinksWrapper>
      <IconLink href="/" title="Facebook">
        <i className="fab fa-facebook-square" />
      </IconLink>
      <IconLink href="/" title="Instagram">
        <i className="fab fa-instagram" />
      </IconLink>
      <IconLink href="/" title="Twitter">
        <i className="fab fa-twitter-square" />
      </IconLink>
    </LinksWrapper>
  );
};

export default SocialLinks;
