import React, { useContext } from "react";
import cartContext from "../Contexts/cartContext";
import { CircleX, Filter } from "lucide-react";
import { toast } from "react-toastify";
const SingleCartItem = ({ item }) => {
  const { description, price, product_id, product_image, product_title } = item;
  const { cartItems, setCartItems } = useContext(cartContext);
  const handleDeleteCart = () => {
    const newCartItems = cartItems.filter(
      (item) => item.product_id !== product_id
    );
    setCartItems(newCartItems);
    toast.error("Product Deleted From Cart", {
      autoClose: 1000,
    });
  };
  return (
    <div
      id={product_id}
      className="rounded-4xl p-8 flex gap-8 h-[188px] bg-white shadow-2xl mb-8 relative"
    >
      <div>
        <img className="rounded-2xl h-full" src={product_image} alt="" />
      </div>
      <div className="text-[#09080F]">
        <h2 className="font-semibold text-2xl">{product_title}</h2>
        <p className="text-lg text-[#09080F]/60 mt-3 mb-4">{description}</p>
        <h4 className="font-semibold text-xl">Price: $ {price}</h4>
      </div>
      <CircleX
        onClick={handleDeleteCart}
        className="absolute right-7"
        size={"40px"}
        color="#ff0000"
        strokeWidth={1}
      />
    </div>
  );
};

export default SingleCartItem;
