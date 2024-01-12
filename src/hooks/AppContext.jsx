import { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CartContext from "./CartContext";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <GlobalContext.Provider value={{}}>
      <CartContext>{children}</CartContext>
    </GlobalContext.Provider>
  );
};

export default AppContext;
