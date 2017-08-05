import { combineReducers } from 'redux';

import { reducer as search } from './searchResults';
import { reducer as player } from './musicPlayer';

export default combineReducers({
  search,
  player
});
