import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import bgDesktop from "../../assets/background/desktop/header_modal.svg";
import bgTablet from "../../assets/background/tablet/header_modal.svg";
import bgMobile from "../../assets/background/mobile/header_modal.svg";
import close from "../../assets/close.svg";
import DotsPattern from "../utils/svg/DotsPattern";
import linkWeb from "../../assets/contact_icons/linkWeb_grey.svg";
import githubIcon from "../../assets/contact_icons/github_grey.svg";
import ModalTag from "./ModalTag";

const DetailProject = ({ id, setShowModal, setSelectedProjectId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/Json/projects.json")
      .then((response) => {
        setData(response.data.projects.find((project) => project.id === id));
        console.log(
          response.data.projects.find((project) => project.id === id),
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProjectId(null);
  };

  return (
    <div>
      <picture className="block w-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <source media="(min-width: 768px)" srcSet={bgTablet} />
        <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
      </picture>
      <div className="absolute inset-0 w-full">
        <div className="flex flex-col">
          <div className="flex flex-row justify-end p-2 md:p-4 lg:p-4">
            <img
              src={close}
              onClick={closeModalHandler}
              className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10"
            />
          </div>
          <h1>{data.name.toUpperCase()}</h1>
          <div className="relative w-1/2  flex items-center justify-center ">
            <DotsPattern
              color={"var(--color-yellow)"}
              className={"absolute inset-0 w-full h-full"}
            />
            <h2>{data.subtitle.toUpperCase()}</h2>
          </div>
          <div className="flex flex-row w-full justify-evenly items-center  relative z-50 gap-4">
            <h4>{data.short_description}</h4>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <img
                src={linkWeb}
                alt="Link Web"
                className="w-10 h-auto lg:w-11"
              />
            </a>
            {data.github === "proyecto privado" ? (
              <div className="relative group">
                <span className="absolute top-full mt-1 hidden group-hover:block text-xs text-purple bg-cream px-2 py-1 rounded whitespace-nowrap z-50">
                  Proyecto Privado
                </span>
              </div>
            ) : (
              <a href={data.github} target="_blank" rel="noopener noreferrer">
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
      {!data ? (
        <h1>loading..</h1>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex flex-row flex-wrap mt-4 w-full">
            {data.images.map((image) => {
              return (
                <div>
                  <img src={image.image} alt={image.name} className="w-1/3" />
                  <span className="font-accent-body text-stone text-xs lg:text-sm">
                    {image.name.toLowerCase()}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col lg:flex-row w-full lg:justify-between">
              <ModalTag
                tilte={"DESAFÍO"}
                dotsColor={"var(--color-orange)"}
                bgColor={"bg-magenta"}
                className="w-1/2 lg:w-1/3"
              />
              <p className="w-11/12 mx-auto mt-2 lg:mt-0 lg:w-2/3 text-xs md:text-base  text-justify  lg:mr-8">
                {data.challenge}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:justify-between">
              <ModalTag
                tilte={"SOLUCIÓN"}
                dotsColor={"var(--color-cyan)"}
                bgColor={"bg-mint"}
                className="w-1/2 lg:w-1/3"
              />
              <p className="w-11/12 mx-auto mt-2 lg:mt-0 lg:w-2/3 text-xs md:text-base  text-justify  lg:mr-8">
                {data.solution}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:justify-between">
              <ModalTag
                tilte={"IMPACTO"}
                dotsColor={"var(--color-blue)"}
                bgColor={"bg-purple"}
                className="w-1/2 lg:w-1/3"
              />
              <p className="w-11/12 mx-auto mt-2 lg:mt-0 lg:w-2/3 text-xs md:text-base  text-justify  lg:mr-8">
                {data.impact}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:justify-between">
              <ModalTag
                tilte={"STACK TECNOLÓGICO"}
                dotsColor={"var(--color-parchment)"}
                bgColor={"bg-yellow"}
                className="w-1/2 lg:w-1/3"
              />
              <div className="flex flex-row justify-between flex-wrap w-11/12 lg:w-2/3 mx-auto lg:mr-8  gap-2 lg:gap-4  mt-4 lg:mt-0 mb-10">
                {data.technologies.map((tech) => {
                  return (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-auto lg:w-10"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailProject;
