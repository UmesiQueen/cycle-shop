import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="error">Oops! Page Not Found</div>,
    children: [
      {
        path: "*",
        element: <div className="error">Oops! Page Not Found</div>,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
