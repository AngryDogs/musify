import { REQUEST_MUSIC_STREAM_ERROR, REQUEST_MUSIC_STREAM } from '../constants/constants';

const initialState = {
  streamAudio: null,
  streamError: null,
}


export default function player(state = initialState, response) {
  switch (response.type) {
    case REQUEST_MUSIC_STREAM:
      state.streamAudio && state.streamAudio.pause();
      return {...state, streamAudio: new Audio(response.streamLocation)};
    case REQUEST_MUSIC_STREAM_ERROR:
      return {...state, streamError: 'Got error'};
    default:
      return state;
  }
}
