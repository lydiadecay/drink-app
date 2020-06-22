import React, { useState } from "react";
import "../Styling/explore.css";
import Button from "../Components/Button";
import Search from "../Components/Search";
import Header from "../Components/Header";
import drinks from "../Data/drinks.json";
import { NavLink } from "react-router-dom";

const ExplorePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1 id="h1-explore">Find your favourite drink!</h1>
      <Search />
    </div>
  );
};

export default ExplorePage;
