import { ORDERS } from '../types';

const initialState = {
  Data: [],
  isLoding: false,
  error: ''
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  } 
};

export default orderReducer;



