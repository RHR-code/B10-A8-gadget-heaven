import React from "react";
import Cart from "./Cart";

const Dashboard = () => {
  return (
    <div>
      <div className="max-w-[1600px] mx-auto bg-[#9538E2] text-center text-white mb-10 ">
        <h1 className="text-3xl font-bold mb-5 pt-8">Product Details</h1>
        <p className="max-w-[796px] mx-auto pb-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="pb-10">
          <button className="py-3 px-16 text-[#9538E2] bg-white border-b-white rounded-full text-lg font-semibold mr-5">
            Cart
          </button>
          <button className="py-3 px-16 text-white bg-transparent border border-b-white text-lg font-semibold rounded-full">
            Wishlist
          </button>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Dashboard;
