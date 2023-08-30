import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
