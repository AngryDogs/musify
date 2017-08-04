import React from 'react';
import { connect } from 'react-redux';

let audio = null;

const play = (player) => {
  if(player.streamAudio) {
    player.streamAudio.play();
  }
}

const autoPlay = (player) => {
  play(player);
}

const pause = (player) => {
  if(player.streamAudio) {
    player.streamAudio.pause();
  }
}

const Player = ({ player }) => (
<div className="footer navbar-fixed-bottom">
  <div className="container">
    <div className="footer-body">
      { autoPlay(player) }
      <button onClick={event => play(player)}>PLAY</button>
      <button onClick={event => pause(player)}>PAUSE</button>
    </div>
  </div>
</div>
)

export default connect(state => state)(Player);
