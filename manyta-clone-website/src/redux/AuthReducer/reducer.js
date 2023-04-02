import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SET_PHONE_NUMBER,
  LOGIN_SET_SHOW_OTP,
  LOGIN_SET_OTP,
  LOGIN_SET_USER,
  LOGIN_LOADING,
  LOGIN_LOADING_DONE,
} from "./ActionType";
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  ErrorMessage: "",
  user: null,
  ph: "",
  showOTP: true,
  otp: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        ErrorMessage: payload,
      };
    }
    case LOGIN_SET_PHONE_NUMBER: {
      return {
        ...state,
        Ph: payload,
      };
    }
    case LOGIN_SET_SHOW_OTP: {
      return {
        ...state,
        showOTP: false,
      };
    }
    case LOGIN_SET_OTP: {
      return { ...state, otp: payload };
    }
    case LOGIN_SET_USER: {
      return { ...state, user: payload };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_LOADING_DONE: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
