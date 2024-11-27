import React from "react";
import ReactDOM from "react-dom/client";
import DashBoard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import NewUser from "./components/NewUser/NewUser";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Errors from "./components/Error/Errors";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:  <DashBoard />,
      },
      {
        path: "/user",
        element: <NewUser />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<App />)
