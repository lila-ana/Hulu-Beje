import { ReduxCheckBox} from '../Actions/checkboxActions';

const initialState = {
  isChecked: false,
};

export const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReduxCheckBox:
      return { 
        ...state, 
        isChecked: action.payload };
    default:
      return state;
  }
};