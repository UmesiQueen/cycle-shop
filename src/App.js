import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import AppContext from "./hooks/AppContext";

const App = () => {
  return (
    <AppContext>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppContext>
  );
};

export default App;
