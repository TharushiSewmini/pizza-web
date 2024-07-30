import React from "react";
import "./index.css";
interface OrderMenuTagProps {
  itemImage: string;
  itemName: string;
  onClick: (e: any) => void;
  isClicked: boolean;
}
const OrderMenuTag = ({
  itemImage,
  itemName,
  onClick,
  isClicked,
}: OrderMenuTagProps) => {
  return (
    <div
      className="order-menu-tag"
      onClick={onClick}
      style={{
        border: isClicked ? "2px solid black" : "none",
        backgroundColor: isClicked ? "rgba(255, 136, 32 , 0.9)" : "white",
        color: isClicked ? "white" : "black",
      }}
    >
      <div className="order-menu-img-arround">
        <img src={itemImage} alt="" className="order-menu-tag-img" />
      </div>

      <div className="order-menu-item-type">{itemName}</div>
    </div>
  );
};

export default OrderMenuTag;
