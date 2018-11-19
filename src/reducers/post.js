import * as types from '../constants/ActionTypes';

const initialState = {
  image: null,
  title: 'cat',
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POST:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
