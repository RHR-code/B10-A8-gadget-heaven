import React, { use } from "react";
import CategoryBtn from "./CategoryBtn";

const GadgetCategories = ({ fetchGadCats }) => {
  const categories = use(fetchGadCats);

  return (
    <div className="w-[20%] p-6 bg-white shadow-2xl rounded-4xl flex flex-col  text-center">
      {categories.map((item) => (
        <CategoryBtn key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GadgetCategories;
