import { START_SEARCH, RECIVED_SEARCH_RESULTS, SEARCH_ERROR } from './constants';

const initialState = {
  isLoading: false,
  searchResults: {},
  searchError: ''
};

export default function search(state = initialState, response) {
  switch (response.type) {
    case START_SEARCH:
      return { ...state, isLoading: true };
    case RECIVED_SEARCH_RESULTS:
      return { ...state, isLoading: false, searchResults: response.body };
    case SEARCH_ERROR:
      return { ...state, searchError: 'Got error' };
    default:
      return { ...state, isLoading: false };
  }
}
