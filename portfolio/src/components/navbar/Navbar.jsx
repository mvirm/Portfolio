import React from "react";
import hamburguer_menu from "../../assets/hamburguer_menu.svg";
import isotype from "../../assets/isotype.svg";
import name from "../../assets/name.svg";
import email_grey from "../../assets/contact_icons/email_grey.svg";
import linkedIn_grey from "../../assets/contact_icons/linkedIn_grey.svg";
import github_grey from "../../assets/contact_icons/github_grey.svg";
import bg from "../../assets/background/navbar.svg";
import DotsPattern from "../utils/svg/DotsPattern";

const Navbar = () => {
  return (
    <div className="relative w-full overflow-hidden z-50">
      {/* BACKGROUND */}
      <picture className="block w-full">
        <img src={bg} alt="" className="w-full h-auto object-contain" />
      </picture>
      <div className="absolute inset-0 flex  justify-between my-1 ml-2.5 w-full">
        <div className="w-1/5">
          <img
            src={isotype}
            alt="isotipo"
            className="w-16 h-auto md:w-48 lg:w-64 -"
          />
          <img
            src={hamburguer_menu}
            alt="menu"
            className="w-4 h-auto -top-4 relative md:hidden"
          />
        </div>
        <div className="hidden w-2/5 md:text-base lg:text-xl md:flex gap-3 lg:gap-16 md:mt-3 ml-8 justify-around">
          <h4>perfil</h4>
          <h4>stack</h4>
          <h4>proyectos</h4>
          <h4>contacto</h4>
        </div>
        <div className="w-2/5 h-24 md:hidden flex  items-center justify-evenly -top-8 relative md:top-0">
          <a
            href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%desde%portfolio"
            title="Enviar email a Virginia"
            aria-label="Enviar email a Virginia"
          >
            <img src={email_grey} alt="enviar email" className="w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/virginiamontoya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn_grey} alt="LinkedIn" className="w-6" />
          </a>
          <a
            href="https://github.com/mvirm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_grey} alt="Github" className="w-6" />
          </a>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-around mb-2">
          <img src={name} alt="name" className="w-2/5" />
          <div className="relative w-full h-1/2 md:h-1/3 flex items-center justify-center top-0 md:-top-2">
            <DotsPattern
              color={"var(--color-yellow)"}
              className={"absolute inset-0 w-full h-full"}
            />
            <h2 className="relative z-10 font-accent-title text-[0.55rem] md:text-base lg:text-2xl text-center leading-none p-4">
              FULLSTACK DEVELOPER & <br /> PRODUCT DESIGNER
            </h2>
          </div>
          <div className="hidden md:w-full md:flex justify-evenly items-center">
            <a
              href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%20desde%20portfolio"
              title="Enviar email a Virginia"
              aria-label="Enviar email a Virginia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={email_grey}
                alt="enviar email"
                className="w-8 lg:w-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/virginiamontoya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn_grey} alt="LinkedIn" className="w-8 lg:w-10" />
            </a>
            <a
              href="https://github.com/mvirm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_grey} alt="Github" className="w-8 lg:w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
