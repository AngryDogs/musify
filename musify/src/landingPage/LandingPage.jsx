import React from 'react';
import Navbar from '../global/components/Navbar';
import SearchResults from './components/SearchResults';
import MusicPlayer from '../musicPlayer';

const LandingPage = () =>
  <div>
    <Navbar />
    <SearchResults />
    <MusicPlayer />
  </div>;

export default LandingPage;
