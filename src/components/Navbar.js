import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Link to="/">
      <div>
        <div className="navbar">
          <FaCoins className="navbar-icon" />
          <h1>
            Coin <span className="purple">List</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
