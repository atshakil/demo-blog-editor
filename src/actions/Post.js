import { toast } from 'react-toastify';
import * as types from '../constants/ActionTypes';

export const updatePost = data => ({
  type: types.UPDATE_POST,
  data
});

export const commitPost = post => dispatch => {
  let apiServerUrl = null; // Dummy Endpoint
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
    // Successful response handler
  })
  .catch(error => {
    // Error handler
  });
};
