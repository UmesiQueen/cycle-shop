import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import CartContext from "./CartContext";

export const GlobalContext = React.createContext();

const AppContext = ({ children }) => {
  const { pathname } = useLocation();
  const [drawerState, setDrawerState] = React.useState(false);
  const [productData, setProductData] = React.useState([]);

  const {
    isFetched,
    data,
    isLoading: isProductDataLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://cycle-shop-server.onrender.com/api/products").then((res) =>
        res.json()
      ),
  });

  React.useEffect(() => {
    if (isFetched && data) setProductData(data);
  }, [isFetched, data]);

  React.useEffect(() => {
    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <GlobalContext.Provider
      value={{ drawerState, setDrawerState, productData, isProductDataLoading }}
    >
      <CartContext>{children}</CartContext>
    </GlobalContext.Provider>
  );
};

export default AppContext;
