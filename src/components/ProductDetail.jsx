import React from "react";
import star from "../assets/star-full.png";
import starEmt from "../assets/star-empty.png";
import { Heart, ShoppingCart } from "lucide-react";
import { useLoaderData, useParams } from "react-router";
const ProductDetail = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const [productData] = data.filter((item) => item.product_id === productId);
  console.log(productData);
  const {
    availability,
    category,
    description,
    price,
    product_id,
    product_image,
    product_title,
    rating,
    specification,
  } = productData;

  return (
    <div key={product_id} className="max-w-[1600px] mx-auto -mt-60 ">
      <div className="flex gap-8 bg-white mx-40 p-8 rounded-4xl shadow-2xl">
        <div className="flex-1/3 flex items-center">
          <img className="rounded-2xl" src={product_image} alt="" />
        </div>
        <div className="flex flex-col items-start gap-4 flex-2/3">
          <h2 className="font-semibold text-3xl text-[#09080F]">
            {product_title}
          </h2>
          <h4 className="font-semibold text-xl text-[#09080F ]">
            Price: $ {price}
          </h4>
          <button
            className={`py-2 px-3.5 bg-[#309C08]/10  border ${
              availability
                ? "border-[#309C08] text-[#309C08]"
                : "border-red-500 text-red-500"
            }  rounded-full `}
          >
            {availability ? "In Stock" : "Out Of Stock"}
          </button>
          <p className="text-lg text-[#09080F]/60">{description}</p>
          <div>
            <h3 className="font-bold text-lg text-[#09080F]">Specifications</h3>
            <ol className="list-decimal ml-6">
              {specification.map((spec, index) => (
                <li key={index} className="text-lg mb-3 text-[#09080F]/60">
                  {spec}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="flex gap-3">
              Rating <img src={star} alt="" />
            </h3>
            <div className="flex gap-5 items-center">
              <div className="flex gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={starEmt} alt="" />
              </div>
              <button>${rating}</button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-[#9538E2] flex items-center gap-4 text-white px-5 p-3 rounded-full">
              Add To Cart <ShoppingCart />{" "}
            </button>
            <div className="border border-gray-300 p-2 rounded-full">
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
