import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import cartContext from "./Contexts/cartContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import wishListContext from "./Contexts/wishListContext";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [wLItems, setWLItems] = useState([]);
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <cartContext.Provider
          value={{ cartItems, setCartItems, totalPrice, setTotalPrice }}
        >
          <wishListContext.Provider value={{ wLItems, setWLItems }}>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
          </wishListContext.Provider>
        </cartContext.Provider>
      </div>
    </>
  );
}

export default App;
