import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import CartContext from "./hooks/CartContext";

const App = () => {
  return (
    <CartContext>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext>
  );
};

export default App;
