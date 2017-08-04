import { combineReducers } from 'redux';

import search from './reducers/search';
import player from './reducers/player';

export default combineReducers({
  search, player
});
