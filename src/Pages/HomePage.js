import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/home.css";
import picture from "../Images/cocktails.jpg";

const HomePage = () => (
  <header>
    <NavLink
      to="/"
      activeClassName="is-active"
      className="link"
      style={{ padding: 20 }}
    >
      Home
    </NavLink>
    <NavLink to="/explore" activeClassName="is-active" className="link">
      Explore
    </NavLink>

    <h1 id="h1-home">Welcome to The Cocktail Explorer!</h1>

    <img src={picture} className="pic" alt="cocktails" />
  </header>
);

export default HomePage;
