import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import productContext from "./Contexts/productContext";
import { useState } from "react";
function App() {
  const [productsData, setProductsData] = useState([]);
  return (
    <>
      <productContext.Provider value={{ productsData, setProductsData }}>
        <Navbar />
        <Outlet />
        <Footer />
      </productContext.Provider>
    </>
  );
}

export default App;
