import React from "react";
import { Link } from "react-router-dom";

const Header = ({ text }) => (
  <header style={{ padding: 50 }}>
    <Link
      to="/"
      activeClassName="is-active"
      className="link"
      style={{ padding: 20 }}
    >
      Home
    </Link>
    <Link to="/explore" activeClassName="is-active" className="link">
      Explore
    </Link>
  </header>
);

export default Header;
