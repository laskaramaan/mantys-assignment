import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <div className="header-style">
      <div>
        <Link className="logo" to="/">
          Amaan's Slot Booking App
        </Link>
      </div>
     
    </div>
  );
};

export default Header;
