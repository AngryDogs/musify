import moment from 'moment';
import { REQUEST_MUSIC_STREAM } from './constants';

const withUrl = (videoId, duration) => `http://localhost:8000/music?videoId=${videoId}&duration=${duration}&type=audio/mpeg`;

export const startStreaming = (videoId, duration) => {

  const durationInSeconds = moment.duration(duration).asSeconds();
  return (dispatch, getState) => {
    const { streamAudio } = getState().player;
    if(streamAudio) {
      streamAudio.pause();
      // streamAudio.src = "";
      // streamAudio.load();
      // streamAudio.close();
    }

    const newStreamAudio = new Audio(withUrl(videoId, durationInSeconds));

    newStreamAudio && newStreamAudio.play();

    dispatch({ type: REQUEST_MUSIC_STREAM, streamAudio: newStreamAudio,
      duration: durationInSeconds });
  };
};
