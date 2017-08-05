import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayButton from './playButton';
import ProgressBar from './progressBar';
import { play, pause } from './actions';

const MusicPlayer = ({ isPlaying, play, pause, player, duration, currentTime, playPercentage }) =>
  <div className="footer navbar-fixed-bottom">
    <div className="container">
      <div className="footer-body">
        <PlayButton
          isPlaying={isPlaying} //player && player.streamAudio && player.streamAudio.paused}
          play={play}
          pause={pause}
        />
      <ProgressBar playPercentage={playPercentage} />
        {currentTime} - { duration }
      </div>
    </div>
  </div>;

const mapStateToProps = state => (
  {
  isPlaying: state.player.isPlaying,
  player: state.player,
  duration: state.player.duration,
  currentTime: state.player.currentTime,
  playPercentage: 100 * (state.player.currentTime / state.player.duration),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      play,
      pause
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
