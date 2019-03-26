import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import PageBackground from './Background';

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.neutral.lightGrayBlue};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  position: relative;
  z-index: 2;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <PageWrapper>
          <PageBackground />
          <PageContainer>{children}</PageContainer>
        </PageWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Page;
