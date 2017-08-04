import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayButton from './PlayButton';
import { play, pause } from '../../api/actions/player';

const Player = ({ isPlaying, play, pause, player }) =>
  <div className="footer navbar-fixed-bottom">
    <div className="container">
      <div className="footer-body">
        <PlayButton
          isPlaying={isPlaying} //player && player.streamAudio && player.streamAudio.paused}
          play={play}
          pause={pause}
        />
      </div>
    </div>
  </div>;

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying,
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      play,
      pause
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Player);
