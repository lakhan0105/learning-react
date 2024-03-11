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

// actions

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
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Route>
      <Route path="/login" element={<Login />} errorElement={<Error />}></Route>
      <Route
        path="/register"
        element={<Register />}
        errorElement={<Error />}
      ></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
