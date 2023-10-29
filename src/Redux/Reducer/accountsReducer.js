import { ACCOUNTS } from '../types';

const initialState = {
  Data: [],
  isLoding: false,
  error: ''
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNTS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  } 
};

export default accountReducer;
