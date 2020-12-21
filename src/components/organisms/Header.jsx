import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="logo.png" alt="app logo" height="50px" width="50px" />
      <h5>ABC PARCELS</h5>

      <ul className="header-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/parcels">
          <li>Parcels</li>
        </Link>
        <Link to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </header>
  );
}
