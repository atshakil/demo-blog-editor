import * as types from '../constants/ActionTypes';
import { TEMPLATE1 } from '../templates/sample.js';

const initialState = {
  image: null,
  title: '',
  content: TEMPLATE1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POST:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
