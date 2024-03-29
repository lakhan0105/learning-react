import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages/index";

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProdLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as OrdersLoader } from "./pages/Orders";
import { loader as checkoutLoader, loader } from "./pages/Checkout";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import store from "./store";

// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
        <Route
          index
          element={<Landing />}
          errorElement={<ErrorElement></ErrorElement>}
          loader={landingLoader}
        ></Route>

        <Route
          path="/products"
          element={<Products />}
          loader={productsLoader}
        ></Route>

        <Route
          path="/products/:id"
          element={<SingleProduct />}
          loader={singleProdLoader}
        ></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route
          path="/checkout"
          element={<Checkout />}
          loader={checkoutLoader(store)}
          action={checkoutAction(store)}
        ></Route>

        <Route
          path="/orders"
          element={<Orders />}
          loader={OrdersLoader(store)}
        ></Route>
      </Route>

      <Route
        path="/login"
        element={<Login />}
        errorElement={<Error />}
        action={loginAction(store)}
      ></Route>

      <Route
        path="/register"
        element={<Register />}
        errorElement={<Error />}
        action={registerAction}
      ></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
