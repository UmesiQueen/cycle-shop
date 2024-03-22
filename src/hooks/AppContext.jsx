import React from "react";
import { useLocation } from "react-router-dom";

import CartContext from "./CartContext";

export const GlobalContext = React.createContext();

const AppContext = ({ children }) => {
  const { pathname } = useLocation();
  const [drawerState, setDrawerState] = React.useState(false);

  React.useEffect(() => {
    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <GlobalContext.Provider value={{ drawerState, setDrawerState }}>
      <CartContext>{children}</CartContext>
    </GlobalContext.Provider>
  );
};

export default AppContext;
