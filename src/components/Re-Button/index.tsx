import React from "react";
import "./index.css";

interface MyButtonProps {
  buttonText?: string;
  buttonwidth?: string;
  buttonHeight?: string;
  BgColor?: string;
  textColor?: string;
  borderRadius?: string;
  textSize?: string;
  textWeight?: string;
  fontFamily?: string;
  onClick?:(e:any)=>void
}
const MyButton = ({
  buttonHeight,
  buttonText,
  buttonwidth,
  BgColor,
  textColor,
  borderRadius,
  textSize,
  textWeight,
  fontFamily,
  onClick
}: MyButtonProps) => {
  return (
    <button
    onClick={onClick}
      className="my-button-container"
      style={{
        backgroundColor: BgColor ? BgColor : "#FF9921",
        borderRadius: borderRadius ? borderRadius : " 0.938rem",
        width: buttonwidth ? buttonwidth : "12.563rem",
        height: buttonHeight ? buttonHeight : "3.75rem",
        fontSize: textSize ? textSize : "1.5rem",
        fontWeight: textWeight ? textWeight : "700",
        fontFamily: fontFamily ? fontFamily : "Poppins",
      }}
    >
      {buttonText ? buttonText : "Order Now"}
    </button>
  );
};

export default MyButton;
