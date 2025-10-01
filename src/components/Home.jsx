import React from "react";
import { useLocation } from "react-router";
import Banner from "./Banner";
import Gadgets from "./Gadgets";

const Home = () => {
  const navigation = useLocation();

  return (
    <>
      <div className="bg-[#F6F6F6]">
        <Banner />
        <Gadgets />
      </div>
    </>
  );
};

export default Home;
