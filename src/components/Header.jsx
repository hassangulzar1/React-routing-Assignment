import React from "react";
import logo from "../assets/Heading.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <hr />
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"} style={{ margin: "0 4px" }}>
          Menu
        </Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/timing"} style={{ margin: "0 4px" }}>
          Timings
        </Link>
        <Link to={"/contact"}>Contact Us</Link>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
