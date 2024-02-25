import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home/index";
import About from "./routes/About/index";
import Contact from "./routes/Contact/index";
import ProductCategory from "./routes/ProductCategory/index";
import Product from "./routes/ProductPage/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <div className="default">Oops! Page Not Found</div>,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product-category/:productType",
        element: <ProductCategory />,
      },
      {
        path: "product/:productName",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
