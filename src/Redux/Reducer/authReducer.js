import { SET_PERMISSIONS, SET_USER } from '../types';

const initialState = {
  user: null,
  isAuthenticated: false,
  error:'',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case SET_PERMISSIONS:
        return {
          ...state,
          user: {
            ...state.user,
            permissions: action.payload,
          },
        };
    default:
      return state;
  } 
};

export default authReducer;
