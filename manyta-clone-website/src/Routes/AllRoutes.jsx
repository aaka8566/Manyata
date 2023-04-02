import { Route, Routes } from "react-router-dom";
import { HomePage } from "./../Pages/Home/HomePage";
import AdminFunds from "../Pages/Admin/AdminFundsOrders";
import { CartPage } from "./../Pages/Purchase/CartPage";
import { WishListPage } from "./../Pages/Purchase/Wishlist";
import PrivateRoute from "./ProtectedRoute";
import { SingleProductPage } from "./../Pages/Product/SingleProductPage";
import { AdminLogin } from "../Pages/Admin/AdminLogin";
import { AdminHome } from "../Pages/Admin/AdminHome";
import { OrderPlacedPage } from "./../Pages/Order/PlacedOrder";
import { LoginPage } from "../Pages/Login/LoginPage";
import { ErrorPage } from "../Pages/Login/ErrorPage";
import { ProductsPage } from "../Pages/Product/ProductPage";
import AdminAdd from "./../Pages/Admin/AdminAdd";
export const AllRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/wishlist/:user"
        element={
          <PrivateRoute>
            <WishListPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/orderplaced/:user"
        element={
          <PrivateRoute>
            <OrderPlacedPage />
          </PrivateRoute>
        }
      ></Route>

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/adminaddproducts" element={<AdminAdd />} />
      <Route path="/adminfundsorders" element={<AdminFunds />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
