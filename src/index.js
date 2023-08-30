import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./assets/css/global.css";
import router from "./routes";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
