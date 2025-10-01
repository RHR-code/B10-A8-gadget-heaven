import React, { use } from "react";
import someImg from "../assets/banner.jpg";
import GadgetCard from "./GadgetCard";
const GadgetCards = ({ fetchGadgets }) => {
  const allGadgets = use(fetchGadgets);
  console.log(allGadgets);

  return (
    <div className="w-[80%] grid grid-cols-3 gap-6">
      {allGadgets.map((card) => (
        <GadgetCard key={card.product_id} card={card} />
      ))}
    </div>
  );
};

export default GadgetCards;
