import { REQUEST_MUSIC_STREAM, PLAY, PAUSE, STOP } from './constants';

const withUrl = videoId => `http://localhost:8000/music?videoId=${videoId}`;

export const startStreaming = videoId => {
  return (dispatch, getState) => {
    const { streamAudio, isPlaying } = getState().player;
    if (streamAudio) {
      dispatch(pause());
    }
    const newStreamAudio = new Audio(withUrl(videoId));
    newStreamAudio.onpause = () => dispatch(pause());
    newStreamAudio.onplay = () => dispatch(play());
    newStreamAudio.oncanplay = () => dispatch(play());
    newStreamAudio.onended = () => dispatch(stop());
    newStreamAudio.onerror = () => dispatch(stop());

    dispatch({ type: REQUEST_MUSIC_STREAM, streamAudio: newStreamAudio });
  };
};

export function play() {
  return (dispatch, getState) => {
    const { streamAudio, isPlaying } = getState().player;
    if (streamAudio) {
      streamAudio.play();
      return !isPlaying && dispatch({ type: PLAY });
    }
    return false;
  };
}

export function pause() {
  return (dispatch, getState) => {
    const { streamAudio, isPlaying } = getState().player;
    if (streamAudio) {
      streamAudio.pause();
      return isPlaying && dispatch({ type: PAUSE });
    }
    return false;
  };
}

export function stop() {
  return { type: STOP };
}
