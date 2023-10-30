import { SET_PERMISSIONS, SET_USER } from '../types';
import axios from 'axios';
import API_BASE_URL from '../../Config/URLs/Endpoint'


const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

const setPermissions = (permissions) => ({
  type: SET_PERMISSIONS,
  payload: permissions,
});

const loginUser = (username, password) => {
  
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
      const userData = response.data.user;

      dispatch(setUser(userData));

      if (userData && userData.permissions) {
        const userPermissions = userData.permissions;
        dispatch(setPermissions(userPermissions));
      }

    } catch (error) {

      if (error.response) {
        console.error('Request failed with status code:', error.response.status);
        console.error('Response data:', error.response.data);

      } else if (error.request) {
        console.error('No response received. Request made but no response.');

      } else {
        console.error('Error occurred:', error.message);
      }
    }
  };
};

export { loginUser };


