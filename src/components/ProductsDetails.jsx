import React from "react";
import ProductDetail from "./ProductDetail";

const ProductsDetails = () => {
  return (
    <div className="">
      <div className="max-w-[1600px] mx-auto bg-[#9538E2] text-center text-white mb-10 ">
        <h1 className="text-3xl font-bold mb-5 pt-8">Product Details</h1>
        <p className="max-w-[796px] mx-auto pb-[240px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <ProductDetail />
    </div>
  );
};

export default ProductsDetails;
