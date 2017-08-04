import React from 'react';

export default ({ isPlaying, play, pause }) =>
  <button className="btn btn-default" onClick={isPlaying ? pause : play}>
    {isPlaying ? 'pause' : 'play'}
  </button>;
