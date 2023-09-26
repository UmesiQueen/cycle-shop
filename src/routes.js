import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home/home";

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
        element: <div className="default">Coming soon</div>,
      },
      {
        path: "contact",
        element: <div className="default">Coming soon</div>,
      },
    ],
  },
]);

export default router;
