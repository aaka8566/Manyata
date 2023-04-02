import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_PAGES,
} from "./ActionType";

const getProductRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload: payload };
};

const getProductFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

const getGetProductTotalPages = (payload) => {
  return { type: GET_PRODUCT_PAGES, payload: payload };
};
// Complete get products functionality here
export const getProducts = (paramObj) => async (dispatch) => {
  let url = `https://manyta-clone-of-myntra.cyclic.app/products`;
  console.log(url);
  //?category

  dispatch(getProductRequest());
  try {
    const res = await axios.get(
      `https://manyta-clone-of-myntra.cyclic.app/products`,
      paramObj
    );
    console.log(res);
    dispatch(getProductSuccess(res.data));
    dispatch(getGetProductTotalPages(res["headers"]["x-total-count"]));
    console.log(res["headers"]["x-total-count"]);
  } catch (err) {
    console.log(err);
    dispatch(getProductFailure());
  }
};
