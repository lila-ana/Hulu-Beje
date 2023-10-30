import { ADD_PRODUCTS, VIEW_PRODUCTS } from '../types';

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
      case VIEW_PRODUCTS:
        return {
          ...state,
          data:action.payload,
          isloding: true,
        };
    default:
      return state;
  } 
};

export default productsReducer;
