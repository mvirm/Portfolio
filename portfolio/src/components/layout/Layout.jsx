import React from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import Home from "../landing/Home.jsx";
import ProjectsContainer from "../projects/ProjectsContainer.jsx";
import DetailProject from "../detail project/DetailProject.jsx";
import FooterContact from "../footer contact/FooterContact.jsx";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  return (
    <div className="relative overflow-x-hidden">
      <div>
        <Navbar />
        <Home />
        <ProjectsContainer
          setShowModal={setShowModal}
          setSelectedProjectId={setSelectedProjectId}
        />
      </div>
      <FooterContact />

      {showModal && (
        <div className="fixed inset-0 bg-stone/70 flex items-center justify-center z-50">
          <div className="bg-cream w-1/2 max-h-screen overflow-y-auto relative">
            <DetailProject
              id={selectedProjectId}
              setShowModal={setShowModal}
              setSelectedProjectId={setSelectedProjectId}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Layout;
