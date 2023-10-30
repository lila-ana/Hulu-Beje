import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case REMOVE_FROM_CART:
        const productId = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== productId),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;