import React from "react";
import Cart from "./Cart";
import { NavLink, Outlet } from "react-router";

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
          <NavLink
            to="/dashboard/Cart"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-16 border border-b-white rounded-full text-lg font-semibold mr-5 text-[#9538E2] bg-white"
                : "text-white bg-transparent py-3 px-16  border border-b-white text-lg font-semibold rounded-full"
            }
          >
            <button className="">Cart</button>
          </NavLink>
          <NavLink
            to="/dashboard/WishList"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-16 border border-b-white rounded-full text-lg font-semibold ml-5 text-[#9538E2] bg-white"
                : "text-white bg-transparent py-3 px-16  border border-b-white text-lg font-semibold rounded-full"
            }
          >
            <button className="">Wishlist</button>
          </NavLink>
        </div>
      </div>
      {/* <Cart /> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
