import React, { useState } from "react";
import "./index.css";

interface OrderPropos {
  pizzaDetails: string;
  pizzaSize: string;
  price: string;
  itemImage: string;
}
const OrderTile = ({
  pizzaDetails,
  pizzaSize,
  price,
  itemImage,
}: OrderPropos) => {
  const [currentQty, setCurrentQty] = useState(0);
  function incQuantity(): void {
    setCurrentQty((prevQty) => prevQty + 1);
  }
  function decQuantity(): void {
    if (currentQty > 0) {
      setCurrentQty((prevQty) => prevQty - 1);
    }
  }

  return (
    <div className="order-tile-container">
      {/* image */}
      <img src={itemImage} alt="" className="order-tile-pizza-image" />
      {/* details column */}
      <div className="order-tile-detail-container">
        <span className="order-tile-detail-container-first">
          {pizzaDetails}
        </span>
        <span className="order-tile-detail-container-second">{pizzaSize}</span>
        <div className="order-tile-detail-container-third-container">
          <span className="order-tile-detail-container-third">
            ${"$" + price}
          </span>
          {/* adding row */}
          <div className="order-tile-adding-row">
            <button className="add-button" onClick={decQuantity}>
              -
            </button>
            <span className="oredr-tile-qty">{currentQty}</span>
            <button className="add-button" onClick={incQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTile;
