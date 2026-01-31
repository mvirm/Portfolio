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
import LinkToProject from "../utils/LinksToProject";
import CarouselImages from "./CarouselImages";

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
          <div className="flex flex-row justify-end px-2 pt-2 md:px-3 lg:px-5 md:pt-3 lg:pt-5">
            <img
              src={close}
              onClick={closeModalHandler}
              className="w-5 h-auto md:w-6 lg:w-10"
            />
          </div>
          <h1 className="font-subtitle font-bold text-xl md:text-2xl lg:text-4xl pl-2 md:pl-4 lg:pl-6 text-magenta ">
            {data && data.name.toUpperCase()}
          </h1>
          <div className="relative w-full h-14 md:h-16 lg:h-28 flex items-center mt-1 lg:mt-6 ">
            <DotsPattern
              color={"var(--color-yellow)"}
              className={"absolute inset-0 w-full h-full z-0"}
            />
            <h2 className="font-accent-title text-sm mt-1/2 md:text-base lg:text-2xl  pl-2 md:pl-4 lg:pl-6 z-10">
              {data && data.subtitle.toUpperCase()}
            </h2>
          </div>
          <div className="mt-auto flex justify-end pt-6 md:pt-8 lg:pt-28 pr-4 md:pr-10 lg:pr-20">
            <LinkToProject
              url={data && data.url}
              github={data && data.github}
              gap={"gap-3 md:gap-6 lg:gap-12"}
              width={"w-6 md:w-10 lg:w-14"}
            />
          </div>
        </div>
      </div>
      {!data ? (
        <h1>loading..</h1>
      ) : (
        <div className="flex flex-col w-full">
          <h4 className="text-xs md:text-sm lg:text-xl ml-1 md:ml-3 lg:ml-6">
            {data.short_description}
          </h4>
          <CarouselImages images={data.images} />

          <div className="flex flex-col gap-4 mt-0 md:mt-2 lg:mt-4">
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
                      className="w-8 h-auto md:w-10 lg:w-12"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full h-10 lg:h-10 flex items-center justify-center mt-1 mb-2 lg:my-4 ">
            <DotsPattern
              color={"var(--color-yellow)"}
              className={"absolute inset-0 w-full h-full z-0"}
            />
            <button
              className="font-bold text-sm mt-1/2 md:text-base lg:text-xl z-10"
              onClick={() => setShowModal(false)}
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailProject;
