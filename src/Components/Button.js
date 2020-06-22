import React from "react";

const Button = ({ clickyFunction, text }) => {
  return <button onClick={(e) => clickyFunction(true)}>{text}</button>;
};

export default Button;
