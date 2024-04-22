// import pages and components
import { Landing, Error, Register, ProtectedRoute } from "./pages/index";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayouts,
  Stats,
} from "./dashboard/index";

// import toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import router utilities
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayouts />
          </ProtectedRoute>
        }
      >
        <Route path="stats" element={<Stats />} />
        <Route path="addjob" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
        <Route path="alljobs" element={<AllJobs />} />
      </Route>

      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </>
  )
);

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
