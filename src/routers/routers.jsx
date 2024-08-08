import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Components/LandingPage";
import LoginPage from "../Components/LoginPage";
import HomePage from "../Components/HomePage";
import DetailsCard from "../Components/DetailsCard";
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
      {
        path: "/details/:passwordId",
        element: (
          <PrivateRoutes>
            <DetailsCard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
