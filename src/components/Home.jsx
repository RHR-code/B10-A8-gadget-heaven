import React from "react";
import { useLocation } from "react-router";
import Banner from "./Banner";

const Home = () => {
  const navigation = useLocation();

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
