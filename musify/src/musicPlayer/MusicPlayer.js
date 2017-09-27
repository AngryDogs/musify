import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { ProgressSlider, VolumeSlider } from 'react-media-slider';
import moment from 'moment';

const formatSecond = (seconds) => {
  return moment.utc(seconds*1000).format('m:ss');
}

const MusicPlayer = ({ isPlaying, play, pause, player, duration, currentTime, playPercentage, audio }) =>
    <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          className='music-player'
          inlineCollapsed={false}>
      <Menu.Item key="1"
        className="player-content">
        <p>{audio && formatSecond(audio.currentTime) + '-' + formatSecond(duration)}</p>
        <ProgressSlider media={audio} />
      </Menu.Item>
    </Menu>
    ;

const mapStateToProps = state => (
  {
  isPlaying: state.player.isPlaying,
  player: state.player,
  audio: state.player.streamAudio,
  duration: state.player.duration,
  currentTime: state.player.currentTime,
  playPercentage: 100 * (state.player.currentTime / state.player.duration),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
