import React from "react";
import logo from "../../assets/images/logo-horizontal.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav">
      <Link to="/">
        <img src={logo} height={56} alt="logo" />
      </Link>
    </div>
  );
}

export default NavBar;
