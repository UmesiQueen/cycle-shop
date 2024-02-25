import { Outlet } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
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
