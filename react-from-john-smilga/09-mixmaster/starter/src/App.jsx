import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as cardLoader } from "./pages/Cocktail";

import { CocktailCard } from "./components/CocktailCard";
import { useState } from "react";

// create browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        index: true,
        element: <Landing></Landing>,
        loader: landingLoader,
      },
      {
        path: "/newsletter",
        element: <Newsletter></Newsletter>,
      },
      {
        path: "/cocktail/:id",
        loader: cardLoader,
        element: <Cocktail></Cocktail>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
