import {SELECT_CATEGORY, SELECT_SUBCATEGORY} from '../types';

const initialState= {
    data: [],
    error: ''
}

const breadcrumbReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_CATEGORY:
        return [...state, action.payload];
      case SELECT_SUBCATEGORY:
        return [...state, action.payload];
      default:
        return state;
    }
  };

  export default breadcrumbReducer;