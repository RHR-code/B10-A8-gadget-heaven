import React, { Suspense, useEffect, useState } from "react";
import GadgetCategories from "./GadgetCategories";
import GadgetCards from "./GadgetCards";

const fetchGadCats = fetch("/productCategory.json").then((res) => res.json());

const Gadgets = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);

  const validSearch = search.replace(/\s+/g, "").toLowerCase();
  const newProducts = products.filter((product) =>
    product.product_title
      .replace(/\s+/g, "")
      .toLocaleLowerCase()
      .includes(validSearch)
  );

  return (
    <div className="max-w-[1280px] mx-auto pb-20">
      <h1 className="font-bold text-[40px] text-center pb-12 pt-[100px] ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="text-base">({newProducts.length}) Products Found</p>
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Products"
          className="input input-md rounded-2xl"
        />
      </div>
      <div className="md:flex gap-6">
        <Suspense fallback={<h1>Categories Loading...</h1>}>
          <GadgetCategories fetchGadCats={fetchGadCats} />
          <GadgetCards newProducts={newProducts} />
        </Suspense>
      </div>
    </div>
  );
};

export default Gadgets;
