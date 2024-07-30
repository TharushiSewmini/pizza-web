import all from "../../assets/all.svg";
import person from "../../assets/Person.svg";
import setting from "../../assets/Settings.svg";
import email from "../../assets/Email.svg";
import account from "../../assets/Account.svg";
import search from "../../assets/search.svg";
import veggiepizza from "../../assets/veggiepizza.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import "./index.css";
import MyButton from "../../components/Re-Button";
import CheckOutPage from "../CheckOutPage";
import OrderDetailTile from "../../components/Order-Detail-tile";
import HomeShowPage from "../Home-Show-Page";
import AddToCartPopUp from "../../components/PopUps/AddToCartPopUp";
import React, { useState, useEffect } from "react";
const HomePage = () => {
 
  return (
    <div className="home-page-container">
     

      <div className="home-page-left-container">
        {/* icons set */}

        <div className="all-bookings-container">
          <img src={all} className="all-icon" />
          <div className="all-another-icons">
            <img src={person} className="all-icon-unselect" />
            <img src={account} className="all-icon-unselect" />
            <img src={setting} className="all-icon-unselect" />
            <img src={email} className="all-icon-unselect" />
          </div>
        </div>
      </div>
      <HomeShowPage />
      <div className="home-page-right-container">
        <CheckOutPage />
      </div>
    </div>
  );
};

export default HomePage;
