import React, { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import burger1 from "../../assets/burger1.jpg";
import burger from "../../assets/burger.jpg";
import burger2 from "../../assets/burger2.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import pizza from "../../assets/pizza.jpg";
import pizza1 from "../../assets/pizza1.jpg";
const Menu = () => {
  return (
    <Fragment>
      <center>
        <Header />
        <h1>Our Menu</h1>
        <h2>Burgers</h2>
        <img height={"100px"} width={"150px"} src={burger1} alt="" />
        <img height={"100px"} width={"150px"} src={burger} alt="" />
        <img height={"100px"} width={"150px"} src={burger2} alt="" />
        <h2>Pizza's</h2>
        <img height={"100px"} width={"150px"} src={pizza2} alt="" />
        <img height={"100px"} width={"150px"} src={pizza} alt="" />
        <img height={"100px"} width={"150px"} src={pizza1} alt="" />
        <hr />
      </center>
    </Fragment>
  );
};

export default Menu;
