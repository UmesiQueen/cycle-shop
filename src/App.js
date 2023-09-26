import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
