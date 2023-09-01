import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className=" font-DM_Sans bg-slate-400 text-global-color-5 ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
