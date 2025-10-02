import React from "react";
import { useLocation } from "react-router";
import Banner from "./Banner";
import Gadgets from "./Gadgets";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Gadgets />
      </div>
    </>
  );
};

export default Home;
