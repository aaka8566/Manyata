import { ADD_TO_CART } from "./ActionType";

export const AddToCartAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const addToCart = (cartItem) => (dispatch) => {
  console.log(cartItem);
  dispatch(AddToCartAction(cartItem));
};
