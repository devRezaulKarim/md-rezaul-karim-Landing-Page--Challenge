import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ProductsPage from "../pages/ProductsPage";
import Features from "../pages/Features";
import Reviews from "../pages/Reviews";
import ContactUs from "../pages/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
