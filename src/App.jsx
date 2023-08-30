import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

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
