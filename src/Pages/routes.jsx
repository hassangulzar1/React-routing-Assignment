import React from "react";
import Home from "../Pages/1- Home/Home";
import Menu from "../Pages/2- Menu/Menu";
import About from "./3- About/About";
import Timing from "../Pages/4- Timing/Timings";
import Contact from "../Pages/5- ContactUs/Contact";
import { Routes, Route } from "react-router-dom";
const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Timing" element={<Timing />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default routes;
