import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { CartProvider } from "./context/GlobalState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
