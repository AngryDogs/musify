import {
  REQUEST_MUSIC_STREAM_ERROR,
  REQUEST_MUSIC_STREAM,
  PLAY,
  PAUSE
} from '../constants/constants';

const initialState = {
  streamAudio: null,
  streamError: null,
  isPlaying: false
};

export default function player(state = initialState, response) {
  switch (response.type) {
    case REQUEST_MUSIC_STREAM:
      state.streamAudio && state.streamAudio.pause();
      return { ...state, streamAudio: new Audio(response.streamLocation) };
    case REQUEST_MUSIC_STREAM_ERROR:
      return { ...state, streamError: 'Got error' };
    case PLAY:
      return { ...state, isPlaying: true };
    case PAUSE:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}
