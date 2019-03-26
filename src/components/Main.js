import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Button from './Button';
import MockUpsSvg from '../svg/illustration-mockups.svg';
import YourUsersSvg from '../svg/illustration-your-users.svg';
import { rgba } from 'polished';

const Wrapper = styled.main`
  grid-area: main;
  padding: 50px 0;
  ${media.greaterThan('medium')`
   padding: 100px 0;
  `}
`;

const Article = styled.article`
  margin: 0 auto;
`;

const MockUps = styled(Article)`
  max-width: 90%;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  ${media.greaterThan('small')`
    max-width: 55%;
  `}
`;

const YourUsers = styled(Article)`
  max-width: 90%;
  padding: 200px 0;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    margin: 1rem 0;
  }
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    max-width: ${({ theme }) => theme.layout.desktop};
    padding-top: 400px;
    text-align: left;   
  `}
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 2rem;
`;

const ListHeading = styled.h2``;

const ListText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
`;

const FreeTrial = styled(Article)`
  text-align: center;
  padding-bottom: 100px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 40px
    ${({ theme }) => rgba(theme.colors.neutral.veryDarkCyan, 0.15)};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 20px 40px;
  width: 90%;
  ${media.greaterThan('small')`
    width: 70%;
    max-width: 600px;
    padding: 60px 40px 80px;
  `}
`;

const CardTitle = styled.h2`
  font-size: 1.7rem;
`;

const CardText = styled.p`
  margin-bottom: 40px;
`;

const Main = () => {
  return (
    <Wrapper role="main">
      <MockUps>
        <img src={MockUpsSvg} alt="Mock Ups" />
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button as="a" href="/" color="primary">
          Get Started For Free
        </Button>
      </MockUps>
      <YourUsers>
        <img src={YourUsersSvg} alt="Your Users" />
        <List>
          <ListItem>
            <ListHeading>Flowing Conversations</ListHeading>
            <ListText>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </ListText>
          </ListItem>
          <ListItem>
            <ListHeading>Grow Together</ListHeading>
            <ListText>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </ListText>
          </ListItem>
          <ListItem>
            <ListHeading>Your Users</ListHeading>
            <ListText>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </ListText>
          </ListItem>
        </List>
      </YourUsers>
      <FreeTrial>
        <Card>
          <CardTitle>Try It Free</CardTitle>
          <CardText>
            Fully featured 30-day free trial - no credit card required
          </CardText>
          <Button as="a" href="/" color="primary">
            Get Started For Free
          </Button>
        </Card>
      </FreeTrial>
    </Wrapper>
  );
};

export default Main;
