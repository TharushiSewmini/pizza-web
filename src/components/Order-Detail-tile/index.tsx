import React from "react";
import plus from "../../assets/plus.svg";
import "./index.css";

interface OrderDetailTileProps {
  pizzaImage: string;
  itemName: string;
  time: string;
  price: string;
}
const OrderDetailTile = ({
  pizzaImage,
  itemName,
  time,
  price,
}: OrderDetailTileProps) => {
  return (
    <div className="order-detail-tile">
      <div
        className="order-detail-tile-left"
        style={{
          backgroundImage: `url(${pizzaImage})`,
        }}
      ></div>
      <div className="order-detail-tile-right">
        <div className="order-detail-tile-right-name">{itemName}</div>

        <div className="order-detail-tile-right-time">{time} minutes</div>
        <div className="order-detail-tile-right-price-row">
          <div className="order-detail-tile-right-price">${price}</div>
          <button className="order-detail-tile-right-add-btn">
            <img src={plus} alt="" className="order-detail-tile-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailTile;
