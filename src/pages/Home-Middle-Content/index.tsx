import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import HomeShowPage from "../Home-Show-Page";
import ShowDetailItemPage from "../Show-Detail-Item-Page";

const HomeMiddleContent = () => {
  const navigate = useNavigate();

  const handleCategoryChecking = (value: string) => {
    navigate(`/item-category/${value}`);
  };

  return (
    <div className="home-middle-content">
      <Routes>
        <Route 
          path="/" 
          element={<HomeShowPage onCategoryChecking={handleCategoryChecking} />} 
        />
        <Route 
          path="/item-category/:categoryName" 
          element={<ShowDetailItemPage />} 
        />
      </Routes>
    </div>
  );
};

export default HomeMiddleContent;