import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postRequest = () => ({ type: POST_REQUEST });
export const postSuccess = (data) => ({ type: POST_SUCCESS, payload: data });
export const postFailure = (error) => ({ type: POST_FAILURE, payload: error });

export const CustomizablePostRequest = (options) => {
  return (dispatch) => {
    dispatch(postRequest());

    axios(options)
      .then((response) => {
        dispatch(postSuccess(response.data));
      })
      .catch((error) => {
        dispatch(postFailure(error.message));
      });
  };
};
