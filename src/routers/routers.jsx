import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Components/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <h1>login page</h1>,
      },
    ],
  },
]);

export default router;
