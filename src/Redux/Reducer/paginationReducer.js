import {SET_COMPLETED_CURRENT_PAGE, SET_COMPLETED_ITEMS_PER_PAGE, SET_ONGOING_CURRENT_PAGE, SET_ONGOING_ITEMS_PER_PAGE} from '../types';

const initialState = {
    completedCurrentPage: 1,
    completedItemsPerPage: 3,
    ongoingCurrentPage: 1,
    ongoingItemsPerPage: 3,
  };
  

export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ONGOING_CURRENT_PAGE:
            return {
              ...state,
              ongoingCurrentPage: action.ongoingCurrentPage,
            };
        case SET_ONGOING_ITEMS_PER_PAGE:
            return {
                ...state,
                ongoingItemsPerPage: action.ongoingItemsPerPage,
            };
        case SET_COMPLETED_CURRENT_PAGE:
            return {
                ...state,
                completedCurrentPage: action.completedCurrentPage,
            };
        case SET_COMPLETED_ITEMS_PER_PAGE:
            return {
                ...state,
                completedItemsPerPage: action.completedItemsPerPage,
            };       
      default:
        return state;
    }
  };
  