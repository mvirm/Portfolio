import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Home from "../landing/Home.jsx";
import TechSkills from "../techSkills/TechSkills.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TechSkills />
    </div>
  );
};
export default Layout;
