import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyFlights from "../src/pages/MyFlights/MyFlights";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/myflights", element: <MyFlights /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
