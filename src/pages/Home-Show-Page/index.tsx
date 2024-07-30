import React, { useEffect, useState } from "react";
import OrderDetailTile from "../../components/Order-Detail-tile";
import MyButton from "../../components/Re-Button";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import search from "../../assets/search.svg";
import pizza from "../../assets/pizza.svg";
import french from "../../assets/french_fried.svg";
import sandwich from "../../assets/sandwich.svg";
import pack from "../../assets/pack.svg";
import "./index.css";
import OrderMenuTag from "../../components/Order-Menu-tag";
import AddToCartPopUp from "../../components/PopUps/AddToCartPopUp";
import { useNavigate } from "react-router-dom";
interface OrderMenuTagProps {
  itemImage: string;
  itemName: string;
  isClicked: boolean;
}

interface OrderDetailPropos {
  pizzaImage: string;
  itemName: string;
  time: string;
  price: string;
}
interface HomeShowPageProps {
  onCategoryChecking: (itemName: string) => void;
}
const HomeShowPage = ({ onCategoryChecking }: HomeShowPageProps) => {
  const iniitems: OrderMenuTagProps[] = [
    {
      itemImage: pizza,
      itemName: "Pizza",
      isClicked: false,
    },
    {
      itemImage: sandwich,
      itemName: "Burger",
      isClicked: false,
    },
    {
      itemImage: french,
      itemName: " Fries",
      isClicked: false,
    },
    {
      itemImage: pack,
      itemName: "Pack",
      isClicked: false,
    },
  ];

  const OrderDetailItems: OrderDetailPropos[] = [
    {
      pizzaImage: pizza2,
      itemName: "Pizza with Peperoni",
      time: "14-12",
      price: "20",
    },
    {
      pizzaImage: pizza3,
      itemName: "Pizza with Peperoni",
      time: "14-12",
      price: "20",
    },
    {
      pizzaImage: pizza2,
      itemName: "Pizza with Peperoni",
      time: "14-12",
      price: "20",
    },
  ];
  const [items, setItems] = useState<OrderMenuTagProps[]>(iniitems);
  const [orderDetailItems, setOrderDEtailItems] =
    useState<OrderDetailPropos[]>(OrderDetailItems);

  const [isAdd, setIsAdd] = useState(false);


  const handleClick = (clickedItemName: string) => {
    //   navigate("./item-details-page");
 
  
    onCategoryChecking(clickedItemName);
    const updatedItems = items.map((item) => ({
      ...item,
      isClicked: item.itemName === clickedItemName,
    }));
    setItems(updatedItems);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleAddingItem = () => {
    console.log("clicked");

    setIsAdd(true);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds
  };
  // Cleanup the timer

  return (
    <div className="home-page-middle-container">
      <AddToCartPopUp isVisible={isVisible} />
      <div className="middle-container-hello-row">
        <div className="hello-row-left">
          <div className="hello-row-name-top">Hello John</div>
          <div className="hello-row-name-bottom">Welcome Back</div>
        </div>
        <div className="hello-row-right">
          <div className="hello-right-search">
            <img src={search} alt="" className="search-icon" />
          </div>
          <input type="text" className="hello-row-input" placeholder="Search" />
        </div>
      </div>
      <div className="middle-middle-container-banner">
        <div className="banner-left">
          <div className="banner-left-text">
            Make Your First Order
            <br />
            and Get <span className="banner-left-discount">50% Off</span>
          </div>
          <div className="banner-left-para-text">
            Discover the unparalleled joy of our gourmet pizza, crafted with the
            finest ingredients and baked to perfection. Each slice is a symphony
            of flavors, with a crispy crust, rich tomato sauce, that melt in
            your mouth.
          </div>

          <div className="banner-order-now-button">
            <MyButton />
          </div>
        </div>
        <div className="banner-right"></div>
      </div>
      <div className="hello-page-middle-container-order-menu-row">
        <div className="hello-page-middle-container-menu">Order Menu</div>
        <div className="hello-page-middle-container-tag-set">
          {items.map((item, index) => (
            <OrderMenuTag
              key={index}
              itemImage={item.itemImage}
              itemName={item.itemName}
              onClick={() => handleClick(item.itemName)}
              isClicked={item.isClicked}
            />
          ))}
        </div>
      </div>
      <div className="order-detail-set">
        {orderDetailItems.map((item, index) => (
          <OrderDetailTile
            key={index}
            pizzaImage={item.pizzaImage}
            itemName={item.itemName}
            time={item.time}
            price={item.price}
            onClick={() => handleAddingItem()}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeShowPage;
