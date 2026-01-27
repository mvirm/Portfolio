import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Home from "../landing/Home.jsx";
import ProjectsContainer from "../projects/ProjectsContainer.jsx";

const Layout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Home />
      <ProjectsContainer />
    </div>
  );
};
export default Layout;
