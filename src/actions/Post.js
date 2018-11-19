import * as types from '../constants/ActionTypes';

export const incrementDummyValue = () => ({
  type: types.DUMMY_INCREMENT
});

export const updatePost = data => ({
  type: types.UPDATE_POST,
  data
});
