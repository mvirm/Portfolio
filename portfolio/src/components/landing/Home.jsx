import React from "react";
import photo from "../../assets/photo.svg";
import bgDesktop from "../../assets/background/desktop/landing_stack.svg";
import bgTablet from "../../assets/background/tablet/landing_stack.svg";
import bgMobile from "../../assets/background/mobile/landing_stack.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import CardHome from "./CardHome.jsx";
import color_isotype from "../../assets/color_isotype.svg";
import TechSkills from "../techSkills/TechSkills.jsx";

const Home = () => {
  const [data, setData] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    axios
      .get("/Json/profesional_title.json")
      .then((response) => {
        setData(response.data.profesional_title);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (index) => {
    // Si el ancho de pantalla es mayor o igual a 1024px (lg), no hacemos nada
    if (window.innerWidth >= 1024) return;
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="relative z-30 pointer-events-none">
      {/* BACKGROUND */}
      <picture className="block w-full -top-16 md:-top-28 lg:-top-96 relative pointer-events-none -mb-16 md:-mb-28 lg:-mb-96">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <source media="(min-width: 768px)" srcSet={bgTablet} />
        <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
      </picture>
      <div className="absolute inset-0 w-full -top-4 flex flex-col ">
        {!data ? (
          <p>loading</p>
        ) : (
          <>
            <div
              className={`flex w-full transition-all duration-700 ease-in-out pointer-events-auto items-start ${activeCard !== null ? "px-0 gap-10 md:gap-32 justify-between" : "px-4 md:px-8 lg:px-16 gap-1 lg:gap-6 justify-center"}`}
            >
              {(activeCard === null || activeCard === 1) && (
                <CardHome
                  title={data[1].title}
                  subtitle={data[1].subtitle}
                  list={data[1].list}
                  isOpen={activeCard === 1}
                  onClick={() => handleCardClick(1)}
                />
              )}
              <img
                src={photo}
                alt="Virginia"
                className={`transition-all duration-700 ease-in-out object-contain max-w-sm relative ${activeCard !== null ? "w-1/5 top-10 md:top-10 m-1 md:m-3" : "w-1/3 top-0"}`}
                onClick={() => setActiveCard(null)}
              />
              {(activeCard === null || activeCard === 0) && (
                <CardHome
                  title={data[0].title}
                  subtitle={data[0].subtitle}
                  list={data[0].list}
                  isOpen={activeCard === 0}
                  onClick={() => handleCardClick(0)}
                />
              )}
            </div>

            <span
              id="profile"
              className={`w-full px-4 md:px-12 lg:px-32 text-justify ${activeCard !== null ? "mt-0 md:mt-12 lg:mt-10 " : "mt-8 md:mt-10"} text-xs md:text-sm lg:text-base scroll-mt-8 md:scroll-mt-16 lg:scroll-mt-24`}
            >
              Desarrollo soluciones digitales —desde e-commerce y landing pages
              hasta sistemas de software complejos— donde la ingeniería y el
              diseño tienen el mismo peso. Mi valor diferencial es integrar una
              arquitectura de código sólida con una visión de diseño estratégica
              que potencia la usabilidad del producto. Vengo de una cultura de
              trabajo donde la calidad no es un extra, sino el estándar. Me
              involucro en el proceso completo para garantizar que el resultado
              sea eficiente y coherente. No solo escribo código que cumple
              requisitos; entrego productos donde la robustez técnica y la
              precisión estética están al mismo nivel de exigencia.
            </span>
          </>
        )}
        <img
          src={color_isotype}
          alt="isotipo color"
          className="w-full h-auto mt-0 md:mt-4 lg:mt-10"
        />
        <TechSkills />
      </div>
    </div>
  );
};

export default Home;
