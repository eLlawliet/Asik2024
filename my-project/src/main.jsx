import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Register from "./Register.jsx";
import Product from "./Product.jsx";
import Login from "./Login.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
  },
  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
