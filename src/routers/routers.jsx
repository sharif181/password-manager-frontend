import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Components/LandingPage";
import LoginPage from "../Components/LoginPage";
import HomePage from "../Components/HomePage";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/home",
        element: (
          <PrivateRoutes>
            <HomePage />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
