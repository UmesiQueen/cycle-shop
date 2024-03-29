import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import CartContext from "./CartContext";

export const GlobalContext = React.createContext();

const AppContext = ({ children }) => {
  const { pathname } = useLocation();
  const [drawerState, setDrawerState] = React.useState(false);

  const productDataQuery = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://cycle-shop-server.onrender.com/api/products").then((res) =>
        res.json()
      ),
  });

  React.useEffect(() => {
    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <GlobalContext.Provider
      value={{ drawerState, setDrawerState, productDataQuery }}
    >
      <CartContext>{children}</CartContext>
    </GlobalContext.Provider>
  );
};

export default AppContext;
