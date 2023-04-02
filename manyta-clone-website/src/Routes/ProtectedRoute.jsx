import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  const location = useLocation();

  console.log(location);

  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace={true} />
  );
};
export default PrivateRoute;
