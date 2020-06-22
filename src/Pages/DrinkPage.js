import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/home.css";
import drinks from "../Data/drinks.json";
import Header from "../Components/Header";

const DrinkPage = (props) => {
  const drinkName = props.match.params.name;
  const drink = drinks.cocktails.filter((drink) => drink.name === drinkName)[0];

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <div style={{ fontSize: 30, fontWeight: "bold" }}>{drink.name}</div>
      <div style={{ padding: 30 }}>{drink.preparation}</div>
      <img src={drink.image} alt={drink.name} />
    </div>
  );
};

export default DrinkPage;
