import App from "@/App";
import DocumentationPage from "@/pages/DocumentationPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "docs",
        element: <DocumentationPage />,
      },
    ],
  },
  {},
]);
