import { REQUEST_MUSIC_STREAM_ERROR, REQUEST_MUSIC_STREAM, PLAY, PAUSE, STOP, AUDIO_CURRENT_TIME_UPDATE } from './constants';

const initialState = {
  streamAudio: null,
  streamError: null,
  isPlaying: false,
  duration: 0,
  currentTime: 0,
  playPercentage: 0,
};

export default function player(state = initialState, result) {
  switch (result.type) {
    case REQUEST_MUSIC_STREAM:
      return { ...state, streamAudio: result.streamAudio, duration: result.duration };
    case REQUEST_MUSIC_STREAM_ERROR:
      return { ...state, streamError: 'Got error' };
    case AUDIO_CURRENT_TIME_UPDATE:
      return { ...state, currentTime: result.currentTime}
    case PLAY:
      return { ...state, isPlaying: true };
    case PAUSE:
    case STOP:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}
