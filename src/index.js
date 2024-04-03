import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DasboardContent from "./components/DasboardContent/DasboardContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element:<DasboardContent/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="max-w-[1440px] mx-auto bg-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
