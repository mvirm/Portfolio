import { useState, useEffect, useRef } from "react";
import hamburguer_menu from "../../assets/hamburguer_menu.svg";
import isotype from "../../assets/isotype.svg";
import name from "../../assets/name.svg";
import email_grey from "../../assets/contact_icons/email_grey.svg";
import linkedIn_grey from "../../assets/contact_icons/linkedIn_grey.svg";
import github_grey from "../../assets/contact_icons/github_grey.svg";
import bg from "../../assets/background/navbar.svg";
import DotsPattern from "../utils/svg/DotsPattern";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    if (!showMenu) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden z-50">
      {/* BACKGROUND */}
      <picture className="block w-screen">
        <img src={bg} alt="" className="w-full h-auto object-contain" />
      </picture>

      {/* NAVEGACIÓN FIXED: Isotipo, Hamburguesa y h4 */}
      <div className="fixed top-0 left-0 w-full z-100 flex justify-between px-2.5 py-1 bg-linen/70 h-5 md:h-10 lg:h-12">
        <div className="flex w-full flex-row">
          {/* Lado Izquierdo: Isotipo y Menú Hamburguesa */}
          <div className="w-full md:w-1/5">
            <img
              src={isotype}
              alt="isotipo"
              className="w-16 h-auto md:w-48 lg:w-64"
              // className="hidden md:block md:w-48 lg:w-64"
            />
            <img
              src={hamburguer_menu}
              alt="menu"
              className="w-6 h-auto -top-4 relative md:hidden cursor-pointer pr-1"
              // className="w-10 h-auto -top-2 relative md:hidden cursor-pointer "
              onClick={showMenuHandler}
            />
          </div>

          {/* Desktop Menu h4 */}
          <div className="hidden w-2/5 md:text-base lg:text-xl md:flex gap-3 lg:gap-16 md:mt-3 ml-8 justify-around">
            <h4
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              inicio
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => scrollToSection("profile")}
            >
              perfil
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => scrollToSection("stack")}
            >
              stack
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              proyectos
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              contacto
            </h4>
          </div>
        </div>
      </div>

      {/* CONTENIDO ABSOLUTE: Redes y Nombre (No son fixed) */}
      <div className="absolute inset-0 flex justify-end my-1 ml-2.5 w-full flex-row pointer-events-none z-120">
        {/* Redes Móvil */}
        <div className="w-2/5 h-24 md:hidden flex items-center justify-evenly -top-8 relative md:top-0 pointer-events-auto">
          <a
            href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%desde%portfolio"
            target="_blank"
            rel="noopener noreferrer"
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

        {/* Bloque Nombre, Dots y Redes Desktop */}
        <div
          id="home"
          className="w-1/3 flex flex-col items-center justify-around mb-2 pointer-events-auto z-120"
        >
          <img src={name} alt="name" className="w-2/5" />
          <div className="relative w-full h-1/2 md:h-1/3 flex items-center justify-center top-0 md:-top-1">
            <DotsPattern
              color={"var(--color-yellow)"}
              className={"absolute inset-0 w-full h-full"}
            />
            <h2 className="relative z-10 font-accent-title text-[0.5rem] md:text-base lg:text-2xl text-center leading-none p-4">
              FULLSTACK DEVELOPER & <br /> PRODUCT DESIGNER
            </h2>
          </div>
          <div className="hidden md:w-full md:flex justify-evenly items-center">
            <a
              href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%20desde%20portfolio"
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

      {/* Menu Desplegable */}
      {showMenu && (
        <div className="fixed top-4 left-0 z-110 md:hidden" ref={menuRef}>
          <Menu scrollToSection={scrollToSection} setShowMenu={setShowMenu} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
