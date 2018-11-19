import { combineReducers } from 'redux';
import dummy from './dummy';
import post from './post';
import intl from './intl';

export default combineReducers({
  intl,
  post,
  dummy
});
