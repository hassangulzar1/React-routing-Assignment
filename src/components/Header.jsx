import React, { Fragment } from "react";
import logo from "../assets/Heading.png";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <hr />
      <nav>
        <a>Home</a>
        <a>Menu</a>
        <a>About</a>
        <a>Timings</a>
        <a>Contact Us</a>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
