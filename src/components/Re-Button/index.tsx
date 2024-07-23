import React from "react";
import "./index.css";

interface MyButtonProps {
  buttonText?: string;
  buttonwidth?: Number;
  buttonHeight?: Number;
  BgColor?: string;
  textColor?: string;
}
const MyButton = ({
  buttonHeight,
  buttonText,
  buttonwidth,
  BgColor,
  textColor,
}: MyButtonProps) => {
  return <button className="my-button-container">Order Now</button>;
};

export default MyButton;
