import React from "react";
import "./index.css";
import user from "../../assets/user.jpeg";
import notification from "../../assets/notification.svg";
import OrderTile from "../../components/Order-tile";
import pizza1 from "../../assets/pizza1.png";
const CheckOutPage = () => {
  return (
    <div className="checkout-page-container">
      <div className="checkout-page-user-details-row">
        {/* user image */}
        <img src={user} alt="" className="checkout-page-user-image" />
        {/* user name */}
        <div className="checkout-page-user-name">John Smith</div>

        {/* notification icon */}
        <div className="checkout-page-spacer"></div>
        <img
          src={notification}
          alt=""
          className="checkout-page-notification-image"
        />
      </div>

      <div className="checkout-page-card-container">
        <div className="checkout-page-bottom-container"></div>
        <div className="checkout-page-top-container">
          <div className="checkout-page-universal-card">Universal Card</div>
          <div className="checkout-page-card-number">5214 4587 9658 1452</div>
          <div className="checkout-page-card-bottom-row">
            <div className="checkout-page-card-name">John Smith</div>
            <div className="checkout-page-card-date">12/24</div>
          </div>
        </div>
      </div>

      <div className="checkout-page-order-menu-row">
        <div className="checkout-page-order-menu-left">Order Menu</div>
        <div className="checkout-page-order-menu-right">See All</div>
      </div>
      <div className="checkout-page-ordered-set">
        <OrderTile
          pizzaDetails={"Pizza with Mushrooms"}
          pizzaSize={"8 inch"}
          price={"12"}
          itemImage={pizza1}
        />
        <OrderTile
          pizzaDetails={"Pizza with Mushrooms"}
          pizzaSize={"8 inch"}
          price={"12"}
          itemImage={pizza1}
        />
        <OrderTile
          pizzaDetails={"Pizza with Mushrooms"}
          pizzaSize={"8 inch"}
          price={"12"}
          itemImage={pizza1}
        />
        
      </div>
    </div>
  );
};

export default CheckOutPage;
