import { ADD_PRODUCTS } from '../types';

const initialState = {
  data: [],
  isloding: false,
  error: ''
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        isloding: true,
      };
    default:
      return state;
  } 
};

export default productsReducer;
