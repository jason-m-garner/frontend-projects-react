import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.colors.neutral.midGrayBlue};
    font-family: ${({ theme }) => theme.typography.headings.family}, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize};
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
    font-family: ${({ theme }) => theme.typography.headings.family}, sans-serif;
    line-height: 1.2;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
  h3 {
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    transition: ${({ theme }) =>  `background-color ${theme.transitions.duration} ${theme.transitions.timing}` };   
  }
`;

export default GlobalStyle;
