import "./index.css";
import Gif from "../../../assets/basket.gif";
import React from "react";

interface AddToCartPropos {
  isVisible: boolean;
}
const AddToCartPopUp = ({ isVisible }: AddToCartPropos) => {
  return (
    <div
      className="add-to-cart-pop-up-container"
      style={{
        visibility: isVisible == false ? "hidden" : "visible",
      }}
    >
      <div className="add-to-cart-pop-up-text">
        <div className="add-to-cart-text">Added to the cart...! </div>
      </div>
    </div>
  );
};

export default AddToCartPopUp;
