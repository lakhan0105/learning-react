import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import ReqAuth from "./ReqAuth";
import AuthProvider from "./context/AuthProvider";

import { fetchPosts } from "./pages/Posts";
import { fetchPost } from "./pages/PostDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Home></Home>} />
      <Route path="about" element={<About></About>} />
      <Route path="contact" element={<Contact></Contact>} />
      <Route
        path="/posts"
        loader={fetchPosts}
        element={
          <ReqAuth>
            <Posts></Posts>
          </ReqAuth>
        }
      ></Route>

      <Route
        path="posts/:id"
        loader={fetchPost}
        element={<PostDetails></PostDetails>}
      />
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<Error></Error>} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
