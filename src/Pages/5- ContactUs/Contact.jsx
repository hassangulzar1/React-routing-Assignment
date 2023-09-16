import React, { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Contact = () => {
  return (
    <Fragment>
      <center>
        <Header />
        <h1>Contact Us</h1>

        <form action="">
          <label for="name">Name:</label>
          <input id="name" placeholder="Enter Your Name" type="text" />
          <br />
          <br />
          <label for="email">Email:</label>
          <input placeholder="Enter Your Email" type="text" />
          <br />
          <textarea name="" id="" cols="30" rows="10">
            Enter Your message Here
          </textarea>
          <br />
          <br />
          <input type="button" value="Send Message" />
        </form>
        <hr />
        <Footer />
      </center>
    </Fragment>
  );
};

export default Contact;
