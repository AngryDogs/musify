import React from 'react';
import Navbar from '../global/components/Navbar';
import SearchResults from './components/SearchResults';
import Player from '../global/components/Player';

const LandingPage = () => (
  <div>
    <Navbar />
    <SearchResults />
    <Player />
  </div>
);

export default LandingPage;
