import { ArrowDown10 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import cartContext from "../Contexts/cartContext";
import SingleCartItem from "./SingleCartItem";
import Modal from "./Modal";
const Cart = () => {
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

  // let isBuyable = true;

  // if (cartItems.length > 0) {
  //   isBuyable = true;
  // } else {
  //   isBuyable = false;
  // }

  // console.log(cartItems.length);
  console.log(cartItems.length);

  return (
    <div className="max-w-[1280px] mx-auto pl-5">
      <div className="flex justify-between mb-8 items-center">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center gap-5">
          <h3 className="font-bold text-xl">Total Cost: {totalPrice}</h3>
          <div className="p-[2px] text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] border-b-white rounded-full text-lg font-semibold ">
            <div
              onClick={sortCartItems}
              className="bg-white hover:bg-white/79 cursor-pointer text-black flex items-center gap-3 py-3 px-12 rounded-full "
            >
              Sort By Price <ArrowDown10 />
            </div>
          </div>
          <button
            disabled={!cartItems.length}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="py-3 px-12 text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] hover:bg-gradient-to-b hover:from-[#9538E2]/80 hover:to-[#fa08ee]/80 cursor-pointer border-b-white rounded-full text-lg font-semibold mr-5"
          >
            Purchase
          </button>
        </div>
      </div>
      <Modal />
      <div>
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
