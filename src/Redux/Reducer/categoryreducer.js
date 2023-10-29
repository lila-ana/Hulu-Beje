import { CATEGORY_ADD } from '../types';

const initialState = {
  data: [],
  isloding: false,
  error: ''
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ADD:
      return {
        ...state,
        isloding: true,
      };
    default:
      return state;
  } 
};

export default categoryReducer;
