import { combineReducers } from 'redux';

import search from './reducers/search';
import { reducer as player } from '../musicPlayer';

export default combineReducers({
  search,
  player
});
