import React from "react";
import { NavLink } from "react-router";

const CategoryBtn = ({ item }) => {
  return (
    <NavLink
      to={`/category/${item.category}`}
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
