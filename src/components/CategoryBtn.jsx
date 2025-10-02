import React, { useContext } from "react";
import { NavLink } from "react-router";
import productContext from "../Contexts/productContext";

const CategoryBtn = ({ item }) => {
  const { productsData, setProductsData } = useContext(productContext);

  const handleClick = () => {
    const newProductData = productsData.filter(
      (product) => product.category === item.category
    );
    setProductsData([...newProductData]);
  };
  return (
    <NavLink
      to={`/category/${item.category}`}
      onClick={handleClick}
      key={item.id}
      className={({ isActive }) =>
        `py-3.5 rounded-full w-full  font-extrabold text-lg mb-6 ${
          isActive
            ? "bg-[#9538E2] text-white"
            : "bg-[#09080F]/5 text-[#09080F]/60"
        }`
      }
    >
      {item.slug}
    </NavLink>
  );
};

export default CategoryBtn;
