import React from "react";

const GadgetCard = ({ card }) => {
  return (
    <div className="p-5 rounded-2xl bg-white shadow-2xl flex flex-col justify-between">
      <img
        className="w-full rounded-xl h-[200px] object-contain"
        src={card.product_image}
        alt=""
      />
      <h2 className="mt-6 font-semibold text-2xl">{card.product_title}</h2>
      <p className="mt-3 mb-4">Price:{card.price}$ </p>
      <button className="py-3.5 border border-[#9538E2] rounded-full  text-[#9538E2] font-extrabold text-lg mb-6 px-6">
        All Product
      </button>
    </div>
  );
};

export default GadgetCard;
