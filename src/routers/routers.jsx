import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Components/LandingPage";
import LoginPage from "../Components/LoginPage";

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
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
