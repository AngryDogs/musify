import { searchVideosByKeyPhrase } from '../services/search';
import { START_SEARCH, RECIVED_SEARCH_RESULTS, SEARCH_ERROR } from '../constants/constants';

export const searchVideos = (keyPhrase) => {
  return dispatch => {
    dispatch({ type: START_SEARCH });
    searchVideosByKeyPhrase(keyPhrase).then(response => {
      dispatch({ type: RECIVED_SEARCH_RESULTS, ...response });
    }).catch(error => {
      dispatch({ type: SEARCH_ERROR, ...error });
    });
  };
}
