export const initialState = {
    cartItems: []
  };
  
  export const actionTypes = {
    ADD_TO_CART: 'ADD_TO_CART'
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.item]
        };
      default:
        return state;
    }
  };