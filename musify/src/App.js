import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchResults from './searchResults';
import Navbar from './navbar';
import MusicPlayer from './musicPlayer';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={SearchResults} />
      <MusicPlayer />
    </div>
  </Router>;

export default App;
