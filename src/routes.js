import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Contact from "./routes/Contact/contact";

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
        path: "product-category/bicycles",
        element: <div className="default">Coming soon</div>,
      },
      {
        path: "product-category/accessories",
        element: <div className="default">Coming soon</div>,
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
