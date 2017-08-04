import { REQUEST_MUSIC_STREAM } from '../constants/constants';

const URL = "http://localhost:8000/music";

export const startStreaming = (videoId) => {
  return dispatch => {
    dispatch({ type: REQUEST_MUSIC_STREAM, streamLocation: URL + `?videoId=${videoId}`});
  };
}
