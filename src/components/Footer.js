import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Logo from './Logo';
import Button from './Button';
import SocialLinks from './SocialLinks';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  color: #fff;
  grid-area: footer;
  min-height: 300px;
`;

const Inner = styled.div`
  padding: 60px 20px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.desktop};
`;

const LogoWrapper = styled.div`
  text-align: center;
  ${media.greaterThan('medium')`
    text-align: left;
  `}
`;
const ColWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "coltwo"
    "colthree"
    "colfour"
    "colone";
  grid-column-gap: 20px;
  grid-template-columns: 100%;
  max-width: ${({ theme }) => theme.layout.desktop};
  padding-top: 12px;
  ${media.greaterThan('medium')`
  grid-template-areas: "colone coltwo colthree colfour";
    grid-template-columns: 2fr 1fr 1fr 2fr;
  `}
`;

const Col = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin-bottom: 12px;
    }
  }
  ${media.lessThan('medium')`
    padding-top: 40px;
  `}
`;

const ColOne = styled(Col)`
  grid-area: colone;
`;

const ColTwo = styled(Col)`
  grid-area: coltwo;
`;

const ColThree = styled(Col)`
  grid-area: colthree;
  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`;

const ColFour = styled(Col)`
  grid-area: colfour;
  h3 {
    color: #fff;
    margin-top: 0;
  }
  p {
    font-size: ${({ theme }) => theme.typography.fontSizeXs};
    margin-bottom: 12px;
  }
  div {
    margin-top: 14px;
    text-align: right;
  }
`;

const Input = styled.input`
  height: 45px;
  line-height: 45px;
  width: 100%;
  border-radius: 4px;
  appearance: none;
  border: none;
  padding: 0 12px;
  box-sizing: border-box;
  outline: none;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizeXs};
`;

const Footer = () => {
  return (
    <Wrapper role="contentinfo">
      <Inner>
        <LogoWrapper>
          <Logo white />
        </LogoWrapper>
        <ColWrapper>
          <ColOne>
            <SocialLinks />
            <Copyright>
              &copy; Copyright 2019 Huddle. All rights reserved.
            </Copyright>
          </ColOne>
          <ColTwo>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">What We Do</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </ColTwo>
          <ColThree>
            <ul>
              <li>
                <a href="/">Career</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </ColThree>
          <ColFour>
            <h3>Subscribe</h3>
            <p>
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address.
            </p>
            <form>
              <Input type="text" />
              <div>
                <Button color="primary" role="button">
                  Subscribe
                </Button>
              </div>
            </form>
          </ColFour>
        </ColWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
