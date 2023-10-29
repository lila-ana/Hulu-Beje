import { SET_OPTIONS, SET_SELECTED_VALUE } from "../types";

const initialState = {
    selectedValue: "",
    options: [],

  };
  
  export const SelectDropdownreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECTED_VALUE:
        return {
          ...state,
          selectedValue: action.payload,
        };
      case SET_OPTIONS:
        return {
            ...state,
            options: action.payload,
        };
      default:
        return state;
    }
  };