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
  useEffect(() => {
    axios
      .get("/Json/profesional_title.json")
      .then((response) => {
        setData(response.data.profesional_title);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="relative z-30 pointer-events-none">
      {/* BACKGROUND */}
      <picture className="block w-full -top-14 md:-top-28 lg:-top-96 relative pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <source media="(min-width: 768px)" srcSet={bgTablet} />
        <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
      </picture>
      <div className="absolute inset-0 w-full top-12 md:top-24 lg:top-0 flex flex-col ">
        {!data ? (
          <p>loading</p>
        ) : (
          <>
            {/* FILA SUPERIOR */}
            <div className="flex w-full justify-center px-8 md:px-8 lg:px-16 gap-1 lg:gap-6 pointer-events-auto">
              <CardHome
                title={data[1].title}
                subtitle={data[1].subtitle}
                list={data[1].list}
              />

              <img
                src={photo}
                alt="foto de Virginia Montoya"
                className="w-1/3 max-w-sm"
              />

              <CardHome
                title={data[0].title}
                subtitle={data[0].subtitle}
                list={data[0].list}
              />
            </div>

            {/* TEXTO INFERIOR */}
            <span className="w-full px-4 md:px-12 lg:px-32 text-justify mt-8 md:mt-10 text-xs md:text-base">
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
          className="w-full h-auto mt-0 lg:mt-10"
        />
        <TechSkills />
      </div>
    </div>
  );
};

export default Home;
