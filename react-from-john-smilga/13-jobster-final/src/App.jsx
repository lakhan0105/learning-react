import { Landing, Error, Register, Dashboard, HomeLayout } from "./pages/index";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />} errorElement={<Error />}></Route>
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
