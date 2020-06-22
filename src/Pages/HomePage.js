import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => (
  <header>
    <NavLink to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/explore" activeClassName="is-active">
      Explore
    </NavLink>
    <h1>Welcome to The Cocktail Explorer!</h1>
  </header>
);

export default HomePage;
