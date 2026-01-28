import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import TitleTag from "../utils/TitleTag";
import DetailProject from "../detail project/DetailProject.jsx";

const ProjectsContainer = ({ setShowModal, setSelectedProjectId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/Json/projects.json")
      .then((response) => {
        setData(response.data.projects);
        //console.log(response.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative z-10 bg-parchment py-10 -top-32 md:-top-56 lg:-top-154">
      <TitleTag
        tilte={"PROYECTOS"}
        dotsColor={"var(--color-blue)"}
        bgColor={"bg-purple"}
      />
      <div className=" p-4 md:px-0 md:py-8 lg:p-18 flex flex-col md:flex-row flex-wrap gap-8 lg:gap-20 w-full justify-center">
        {data &&
          data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                subtitle={project.subtitle}
                description={project.description}
                image={project.images[0].image}
                technologies={project.technologies}
                url={project.url}
                github={project.github}
                setShowModal={setShowModal}
                setSelectedProjectId={setSelectedProjectId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
