import React from "react";
import "./index.css";
import CheckOutPage from "../CheckOutPage";
import CheckoutForum from "../Check-out-forum";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeShowPage from "../Home-Show-Page";
import ShowDetailItemPage from "../Show-Detail-Item-Page";

const HomeLastContainer = () => {
  const navigate = useNavigate();
  const goToCheckoutForum = () => {
    navigate("/address-filling");
  };
  return (
    <div className="home-last-container">
      <Routes>
        <Route
          path="/"
          element={<CheckOutPage onGotoAddressFiling={goToCheckoutForum} />}
        />
        <Route path="/address-filling" element={<CheckoutForum />} />
      </Routes>
    </div>
  );
};

export default HomeLastContainer;
