import { ArrowDown10 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import cartContext from "../Contexts/cartContext";
import SingleCartItem from "./SingleCartItem";
import Modal from "./Modal";
import { useLoaderData } from "react-router";
import { getFromLocalStorage } from "../utilities/LocalStorage";
const Cart = () => {
  const data = useLoaderData();
  const { cartItems, setCartItems, totalPrice, setTotalPrice } =
    useContext(cartContext);
  const sortCartItems = () => {
    const afterSorting = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(afterSorting);
  };
  console.log(cartItems);

  let totalPrice2 = 0;

  for (let item of cartItems) {
    totalPrice2 = totalPrice2 + item.price;
  }
  useEffect(() => {
    setTotalPrice(totalPrice2);
  }, [totalPrice2, setTotalPrice]);

  useEffect(() => {
    const idsFromLs = getFromLocalStorage();

    const filterData = data.filter((item) =>
      idsFromLs.includes(item.product_id)
    );
    setCartItems(filterData);
  }, [data, setCartItems]);

  return (
    <div className="max-w-[1280px] mx-auto px-5">
      <div className="flex justify-between mb-8 items-center">
        <h2 className="font-bold text-2xl ">Cart</h2>
        <div className="flex items-center gap-5">
          <h3 className="font-bold md:text-xl text-lg">
            Total Cost: {totalPrice}
          </h3>
          <div className="p-[2px] text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] border-b-white rounded-full text-lg font-semibold hidden md:flex">
            <div
              onClick={sortCartItems}
              className="bg-white hover:bg-white/79 cursor-pointer text-black flex  items-center gap-3 py-3 md:px-12 rounded-full  md:text-lg "
            >
              Sort By Price <ArrowDown10 />
            </div>
          </div>
          <button
            disabled={!cartItems.length}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="py-3 md:px-12 px-4 text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] hover:bg-gradient-to-b hover:from-[#9538E2]/80 hover:to-[#fa08ee]/80 cursor-pointer border-b-white rounded-full text-lg font-semibold mr-5 "
          >
            Purchase
          </button>
        </div>
      </div>
      <Modal />
      <div className="">
        {/* single divs */}

        {cartItems.map((item) => (
          <SingleCartItem
            key={item.product_id}
            item={item}
            totalPrice={totalPrice2}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
