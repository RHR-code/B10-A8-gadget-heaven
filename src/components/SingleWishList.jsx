import React, { useContext } from "react";
import { CircleX, Filter } from "lucide-react";
import { toast } from "react-toastify";
import wishListContext from "../Contexts/wishListContext";
import cartContext from "../Contexts/cartContext";
const SingleWishList = ({ item }) => {
  const { description, price, product_id, product_image, product_title } = item;
  const { wLItems, setWLItems } = useContext(wishListContext);

  const handleDeleteWishList = () => {
    const newWLItems = wLItems.filter((item) => item.product_id !== product_id);
    setWLItems(newWLItems);
    toast.error("Product Deleted From WishList", {
      autoClose: 1000,
    });
  };

  //   add to the cartbtn

  const { cartItems, setCartItems } = useContext(cartContext);

  const handleCartBtn = () => {
    const inCart = cartItems.find(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (!inCart) {
      setCartItems([...cartItems, item]);
      toast.success("Product added to the cart", {
        autoClose: 1000,
      });
    } else {
      toast.error("Product already in the cart", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div
      id={product_id}
      className="rounded-4xl p-8 flex gap-8 h-[256px] bg-white shadow-2xl mb-8 relative"
    >
      <div className="flex-1/3">
        <img className="rounded-2xl h-full" src={product_image} alt="" />
      </div>
      <div className="flex-2/3 text-[#09080F]">
        <h2 className="font-semibold text-2xl">{product_title}</h2>
        <p className="text-lg text-[#09080F]/60 mt-3 mb-4">{description}</p>
        <h4 className="font-semibold text-xl">Price: $ {price}</h4>
        <button
          onClick={() => (handleCartBtn(), handleDeleteWishList())}
          className="py-3 px-6 bg-[#9538E2] font-semibold text-lg text-white rounded-full mt-5"
        >
          Add to Card
        </button>
      </div>

      <CircleX
        onClick={handleDeleteWishList}
        className="absolute right-7"
        size={"40px"}
        color="#ff0000"
        strokeWidth={1}
      />
    </div>
  );
};

export default SingleWishList;
