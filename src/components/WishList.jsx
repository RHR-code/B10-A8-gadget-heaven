import { ArrowDown10 } from "lucide-react";
import React, { useContext, useEffect } from "react";
import SingleCartItem from "./SingleCartItem";
import wishListContext from "../Contexts/wishListContext";
import SingleWishList from "./SingleWishList";
import { getFromLocalStorage } from "../utilities/LocalStorage2";
import { useLoaderData } from "react-router";
const WishList = () => {
  const data = useLoaderData();
  const { wLItems, setWLItems } = useContext(wishListContext);
  const sortWishList = () => {
    const afterSorting = [...wLItems].sort((a, b) => b.price - a.price);
    setWLItems(afterSorting);
  };

  useEffect(() => {
    const idsFromLs = getFromLocalStorage();
    const filterData = data.filter((item) =>
      idsFromLs.includes(item.product_id)
    );
    setWLItems(filterData);
  }, [data, setWLItems]);

  return (
    <div className="max-w-[1280px] mx-auto px-5">
      <div className="flex justify-between mb-8 items-center">
        <h2 className="font-bold text-2xl">WishList</h2>
        <div className="flex items-center gap-5">
          <div className="p-[2px] text-white bg-gradient-to-b from-[#9538E2] to-[#fa08ee] border-b-white rounded-full text-lg font-semibold ">
            <div
              onClick={sortWishList}
              className="bg-white hover:bg-white/79 cursor-pointer text-black flex items-center gap-3 py-3 px-12 rounded-full "
            >
              Sort By Price <ArrowDown10 />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* single divs */}

        {wLItems.map((item) => (
          <SingleWishList key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
