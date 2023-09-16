import React, { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BurgerPic from "../../assets/burger.jpg";
import PizzaPic from "../../assets/pizaa1.jpg";
import BurgerPic2 from "../../assets/burger2.jpg";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <h2>We serve delicious fast foods items</h2>
      <img src={BurgerPic} height={"150px"} width={"200px"} alt="" />
      <img src={PizzaPic} height={"150px"} width={"200px"} alt="" />
      <img src={BurgerPic2} height={"150px"} width={"200px"} alt="" />
      <div>
        <br />
        <a>
          <input type="button" value={"let see our menu"} />
        </a>
        <hr />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
