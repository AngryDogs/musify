import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import SearchResults from './searchResults';
import Navbar from './navbar';
import MusicPlayer from './musicPlayer';

const { Header, Footer, Sider, Content } = Layout;

const App = () =>
  <Router>
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Layout>
        <Sider>
          <MusicPlayer />
        </Sider>
        <Content>
          <Route exact path="/" component={SearchResults} />
        </Content>
      </Layout>
    </Layout>
  </Router>;

export default App;
