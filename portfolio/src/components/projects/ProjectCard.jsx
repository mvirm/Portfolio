import React from "react";
import linkWeb from "../../assets/contact_icons/linkWeb_grey.svg";
import githubIcon from "../../assets/contact_icons/github_grey.svg";
import DotsPattern from "../utils/svg/DotsPattern";

const ProjectCard = ({
  id,
  name,
  subtitle,
  description,
  image,
  technologies,
  url,
  github,
  setShowModal,
  setSelectedProjectId,
}) => {
  const showModalHandler = (id) => () => {
    setShowModal(true);
    setSelectedProjectId(id);
  };

  return (
    <div className="relative bg-cream w-full md:w-2/5 h-auto">
      <div>
        <DotsPattern
          color={"var(--color-yellow)"}
          className={"absolute w-full h-auto z-0 pointer-events-none"}
        />
        <div className="flex flex-row justify-around items-center mx-6 py-6 relative z-10">
          <div className="w-2/3 lg:w-full flex flex-col items-start">
            <h1 className="font-subtitle font-bold text-base lg:text-2xl">
              {name.toUpperCase()}
            </h1>
            <h2 className="font-accent-title text-sm lg:text-xl">
              {subtitle.toUpperCase()}
            </h2>
            <h3
              className="font-accent-body text-base lg:text-2xl text-purple hover:text-magenta relative z-50"
              onClick={showModalHandler(id)}
            >
              VER DETALLE
            </h3>
          </div>
          <div className="flex flex-row w-1/3 justify-evenly items-center  relative z-50 gap-4">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={linkWeb}
                alt="Link Web"
                className="w-10 h-auto lg:w-11"
              />
            </a>
            {github === "proyecto privado" ? (
              <div className="relative group">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-10 h-auto lg:w-11"
                />
                <span className="absolute top-full mt-1 hidden group-hover:block text-xs text-purple bg-cream px-2 py-1 rounded whitespace-nowrap z-50">
                  Proyecto Privado
                </span>
              </div>
            ) : (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-10 h-auto lg:w-11"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt={name}
          className="w-4/5 h-auto mx-auto my-6 lgmy-10"
        />
        <div className="w-11/12 mx-auto">
          <p className="text-sm font-body text-justify">{description}</p>
          <div className="flex flex-row flex-wrap gap-4 py-4 lg:py-10 justify-center">
            {technologies &&
              technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
