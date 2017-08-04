import { REQUEST_MUSIC_STREAM, PLAY, PAUSE } from '../constants/constants';

const URL = 'http://localhost:8000/music';

export const startStreaming = videoId => {
  return dispatch => {
    dispatch({ type: REQUEST_MUSIC_STREAM, streamLocation: URL + `?videoId=${videoId}` });
  };
};

export function play() {
  return (dispatch, getState) => {
    const { player } = getState();
    if (player.streamAudio) player.streamAudio.play();
    return dispatch({ type: PLAY });
  };
}
export function pause() {
  return (dispatch, getState) => {
    const { player } = getState();
    if (player.streamAudio) player.streamAudio.pause();
    return dispatch({ type: PAUSE });
  };
}
