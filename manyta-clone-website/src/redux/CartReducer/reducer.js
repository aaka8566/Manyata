import { ADD_TO_CART } from "./ActionType";
const initialState = {
  cart: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cart: [...state.cart, payload] };
    }

    default: {
      return state;
    }
  }
};
