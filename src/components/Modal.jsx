import React, { useContext } from "react";
import successImg from "../assets/success1.png";
import cartContext from "../Contexts/cartContext";
import { Navigate, useNavigate } from "react-router";
const Modal = () => {
  const { setCartItems, totalPrice, setTotalPrice } = useContext(cartContext);
  const navigate = useNavigate();
  const handleClose = () => {
    setTotalPrice(0);
    setCartItems([]);
    navigate("/");
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center">
          <img src={successImg} alt="" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="py-4 ">Thanks for purchasing.</p>
          <p> Total:{totalPrice}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClose} className="btn font-bold text-lg">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
