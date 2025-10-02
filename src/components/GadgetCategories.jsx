import React, { use } from "react";
import CategoryBtn from "./CategoryBtn";

const GadgetCategories = ({ fetchGadCats }) => {
  const categories = use(fetchGadCats);

  return (
    <div className="md:w-[20%] p-6 bg-white shadow-2xl rounded-4xl flex flex-col mx-5 md:mx-0 mb-5 md:mb-0 text-center h-fit">
      {categories.map((item) => (
        <CategoryBtn key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GadgetCategories;
