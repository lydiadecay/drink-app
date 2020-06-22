import React from "react";
import "../Styling/home.css";
import picture from "../Images/cocktails.jpg";
import Header from "../Components/Header";

const HomePage = () => (
  <div style={{ textAlign: "center" }}>
    <Header />

    <h1 id="h1-home">Welcome to The Cocktail Explorer!</h1>
    <img src={picture} className="pic" alt="cocktails" />
  </div>
);

export default HomePage;
