import { toast } from 'react-toastify';
import * as types from '../constants/ActionTypes';

export const incrementDummyValue = () => ({
  type: types.DUMMY_INCREMENT
});

export const updatePost = data => ({
  type: types.UPDATE_POST,
  data
});

export const commitPost = post => dispatch => {
  /**
   * Process request
   * 
   * Demonstration only, precheck (USES DUMMY ENDPOINT):
   *    - Endpoint exists, procceed to request,
   *    - Else, shows error notification
   * 
   * if success,
   *    - Success notification
   * else,
   *    - Error notification
   */
  let apiServerUrl = null;
  const formData = new FormData();
  formData.append('image', post.image && post.image.content);
  formData.append('title', post.title);
  formData.append('content', post.content);

  if(!apiServerUrl) return toast.error('API server is not configured!'); // notify error

  fetch(apiServerUrl, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // ...
  })
  .catch(error => {
    // ...
  });
};
