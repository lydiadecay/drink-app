import React from "react";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;

/**const Button = ({ onClick, text, index }) => {
  return <button onClick={(e) => onClick(index)}>{text}</button>;
}; */
