import { REQUEST_MUSIC_STREAM_ERROR, REQUEST_MUSIC_STREAM, PLAY, PAUSE, STOP } from './constants';

const initialState = {
  streamAudio: null,
  streamError: null,
  isPlaying: false
};

export default function player(state = initialState, result) {
  switch (result.type) {
    case REQUEST_MUSIC_STREAM:
      return { ...state, streamAudio: result.streamAudio };
    case REQUEST_MUSIC_STREAM_ERROR:
      return { ...state, streamError: 'Got error' };
    case PLAY:
      return { ...state, isPlaying: true };
    case PAUSE:
    case STOP:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}
