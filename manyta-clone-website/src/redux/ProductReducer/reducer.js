import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_PAGES,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  totalLength: 0,
  products: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...payload],
      };
    }
    case GET_PRODUCT_FAILURE: {
      return { ...state, isLoading: true, isError: true };
    }

    case GET_PRODUCT_PAGES: {
      return { ...state, totalLength: payload };
    }
    default: {
      return state;
    }
  }
};
