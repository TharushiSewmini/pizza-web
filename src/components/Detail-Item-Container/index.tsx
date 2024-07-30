import React from "react";
import "./index.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import MyButton from "../Re-Button";

interface DetailItemContainerProps {
  imageSrc: string;
  name: string;
  description: string;
  price: number;
  crustOptions: { label: string; key: string; icon?: React.ReactNode }[];
  sizeOptions: { label: string; key: string; icon?: React.ReactNode }[];
  onCrustChange?: MenuProps["onClick"];
  onSizeChange?: MenuProps["onClick"];
  onAddToCart?: () => void;
}

const DetailItemContainer: React.FC<DetailItemContainerProps> = ({
  imageSrc,
  name,
  description,
  price,
  crustOptions,
  sizeOptions,
  onCrustChange,
  onSizeChange,
  onAddToCart,
}) => {
  const crustMenuProps = {
    items: crustOptions,
    onClick: onCrustChange,
  };

  const sizeMenuProps = {
    items: sizeOptions,
    onClick: onSizeChange,
  };

  return (
    <div className="detail-item-container">
      {/* Image */}
      <div className="detail-item-img-container">
        <img src={imageSrc} alt={name} className="detail-item-img" />
      </div>

      {/* Item Name */}
      <div className="detail-item-name">{name}</div>

      {/* Item Description */}
      <div className="detail-item-description">{description}</div>

      {/* Select Your Crust Dropdown */}
      <Dropdown menu={crustMenuProps} className="detail-item-drop-down">
        <Button>
          <Space>
            Select your crust
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      {/* Select Size Dropdown */}
      <Dropdown menu={sizeMenuProps} className="detail-item-drop-down">
        <Button>
          <Space>
            Select size
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      {/* Add to Cart Button */}
      <div className="detail-item-my-button">
        <MyButton
          buttonText={`Add To Cart: $${price.toFixed(2)}`}
          BgColor="green"
          buttonHeight="2.6rem"
          borderRadius="0.5rem"
          textSize="1.2rem"
          textWeight="300"
          onClick={onAddToCart}
        />
      </div>
    </div>
  );
};

export default DetailItemContainer;
