import React from "react";
import GadgetCard from "./GadgetCard";
import { useLoaderData, useParams } from "react-router";
const GadgetCards = () => {
  const user = useLoaderData();
  const { productId } = useParams();

  const productsData =
    productId === "AllProduct"
      ? user
      : user.filter((product) => product.category === productId);

  return (
    <div className="md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-0 h-[100vh] overflow-y-scroll">
      {productsData.length === 0 ? (
        <div className="col-span-full flex items-center justify-center ">
          <h2 className="font-bold text-2xl text-center">
            No Products Available
          </h2>
        </div>
      ) : (
        productsData.map((card) => (
          <GadgetCard key={card.product_id} card={card} />
        ))
      )}
    </div>
  );
};

export default GadgetCards;
