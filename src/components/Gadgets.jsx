import React, { Suspense } from "react";
import GadgetCategories from "./GadgetCategories";
import GadgetCards from "./GadgetCards";

const fetchGadCats = fetch("/productCategory.json").then((res) => res.json());

const Gadgets = () => {
  return (
    <div className="max-w-[1280px] mx-auto pb-20">
      <h1 className="font-bold text-[40px] text-center pb-12 pt-[100px] ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex gap-6">
        <Suspense fallback={<h1>Categories Loading...</h1>}>
          <GadgetCategories fetchGadCats={fetchGadCats} />
          <GadgetCards />
        </Suspense>
      </div>
    </div>
  );
};

export default Gadgets;
