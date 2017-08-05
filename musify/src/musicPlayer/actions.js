import moment from 'moment';
import { REQUEST_MUSIC_STREAM, PLAY, PAUSE, STOP, AUDIO_CURRENT_TIME_UPDATE } from './constants';

const withUrl = videoId => `http://localhost:8000/music?videoId=${videoId}`;

const addAudioTimeUpdateEventListener = (audio, dispatch) => {
  dispatch({ type: AUDIO_CURRENT_TIME_UPDATE, currentTime: audio.currentTime})
}

export const startStreaming = (videoId, duration) => {

  const durationInSeconds = moment.duration(duration).asSeconds();
  return (dispatch, getState) => {
    const { streamAudio } = getState().player;
    if (streamAudio) dispatch(pause());

    const newStreamAudio = new Audio(withUrl(videoId));
    newStreamAudio.onpause = () => dispatch(pause());
    newStreamAudio.onplay = () => dispatch(play());
    newStreamAudio.oncanplay = () => dispatch(play());
    newStreamAudio.onended = () => dispatch(stop());
    newStreamAudio.onerror = () => dispatch(stop());

    newStreamAudio.addEventListener("timeupdate", () => {
      addAudioTimeUpdateEventListener(newStreamAudio, dispatch);
    }, false);

    dispatch({ type: REQUEST_MUSIC_STREAM, streamAudio: newStreamAudio,
      duration: durationInSeconds });
  };
};

export function play() {
  return (dispatch, getState) => {
    const { streamAudio, isPlaying } = getState().player;
    if (streamAudio && !isPlaying) {
      streamAudio.play();
      return dispatch({ type: PLAY });
    }
    return false;
  };
}

export function pause() {
  return (dispatch, getState) => {
    const { streamAudio, isPlaying } = getState().player;
    if (streamAudio && isPlaying) {
      streamAudio.pause();
      return dispatch({ type: PAUSE });
    }
    return false;
  };
}

export function stop() {
  return { type: STOP };
}
