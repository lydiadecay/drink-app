import React from "react";
import "../Styling/explore.css";
import Button from "../Components/Button";
import drinks from "../Data/drinks.json";
import { NavLink } from "react-router-dom";

const ExplorePage = () => {
  return (
    <div>
      <header>
        {" "}
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
        <h1 id="h1-explore">Find your favourite drink!</h1>
        <form>
          <input type="text" name="drinks" />
          <button>Search</button>
        </form>
      </header>
    </div>
  );
};

export default ExplorePage;
