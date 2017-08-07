import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Icon } from 'antd';
import { ProgressSlider, VolumeSlider } from 'react-media-slider';
import moment from 'moment';

import { play, pause } from './actions';

const formatSecond = (seconds) => {
  return moment.utc(seconds*1000).format('m:ss');
}

const MusicPlayer = ({ isPlaying, play, pause, player, duration, currentTime, playPercentage, audio }) =>
    <Menu
          mode="inline"
          theme="dark"
          className='music-player'
          inlineCollapsed={false}>
      <Menu.Item>
        <Icon type="pie-chart" />
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item>
        <Icon type="pie-chart" />
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item>
        {formatSecond(currentTime)} - {formatSecond(duration)}
      </Menu.Item>
      <Menu.Item>
          <ProgressSlider  />
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
      play,
      pause
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
