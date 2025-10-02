import { ArrowDown10 } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="max-w-[1600px] mx-auto pl-5">
      <div className="flex justify-between  items-center">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center gap-5">
          <h3 className="font-bold text-xl">Total Cost: 999.99</h3>
          <div className="p-[2px] text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] border-b-white rounded-full text-lg font-semibold ">
            <div className="bg-white hover:bg-white/79 cursor-pointer text-black flex items-center gap-3 py-3 px-12 rounded-full ">
              Sort By Price <ArrowDown10 />
            </div>
          </div>
          <button className="py-3 px-12 text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] hover:bg-gradient-to-b hover:from-[#9538E2]/80 hover:to-[#fa08ee]/80 cursor-pointer border-b-white rounded-full text-lg font-semibold mr-5">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
