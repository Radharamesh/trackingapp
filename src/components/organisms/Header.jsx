import React from "react";


import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
<h3>ABC PARCELS</h3>

            <ul className = "header-links">
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