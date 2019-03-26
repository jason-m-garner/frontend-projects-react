import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Page from './components/Page';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Huddle</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700|Poppins:400,400i,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </Helmet>
        <Page>
          <Header />
          <Main />
          <Footer />
        </Page>
      </div>
    );
  }
}

export default App;
