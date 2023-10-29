import { REGISTER } from '../types';

const initialState = {
  data: [],
  isloding: false,
  error: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isloding: true,
      };
    default:
      return state;
  } 
};

export default registerReducer;
