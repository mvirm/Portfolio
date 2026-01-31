import React from "react";
import bgMobile from "../../assets/background/mobile/footer.svg";
import bgTablet from "../../assets/background/tablet/footer.svg";
import bgDesktop from "../../assets/background/desktop/footer.svg";
import TitleTag from "../utils/TitleTag";
import wspIcon from "../../assets/contact_icons/whatsapp_yellow.svg";
import emailIcon from "../../assets/contact_icons/email_yellow.svg";
import linkedInIcon from "../../assets/contact_icons/linkedIn_yellow.svg";
import githubIcon from "../../assets/contact_icons/github_yellow.svg";
import DotsPattern from "../utils/svg/DotsPattern";
import downloadCV from "../../assets/contact_icons/download_yellow.svg";

const FooterContact = () => {
  return (
    <div className="relative w-full z-50">
      {/* BACKGROUND */}
      <picture className="block w-full">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <source media="(min-width: 768px)" srcSet={bgTablet} />
        <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
      </picture>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col pt-8 md:pt-10 gap-4 lg:pt-18 lg:gap-16">
        {/* TITLE */}
        <div id="contact">
          <TitleTag
            tilte={"CONTACTO"}
            dotsColor={"var(--color-cyan)"}
            bgColor={"bg-mint"}
          />
        </div>

        {/* MAIN ROW */}
        <div className="flex w-full justify-between">
          <div className="w-full px-5 lg:px-10 flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20">
            <span className="w-full md:w-1/3 text-xs md:text-sm lg:text-xl leading-relaxed text-justify">
              "Programar es mi forma de resolver problemas; diseñar es mi forma
              de hacer que esas soluciones sean memorables." <br />
              <strong className="text-bold">
                ¿Tenés un proyecto en mente?
              </strong>
              <br />
              Yo te ayudo a construirlo.
            </span>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-2/3 flex flex-col items-center gap-4 md:gap-8 lg:gap-16">
              {/* ICONS */}
              <div className="flex w-full justify-center gap-10 md:gap-12 lg:gap-24">
                <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
                  <p className="text-[0.6rem] md:text-sm lg:text-xl">
                    Escribime y charlemos!
                  </p>
                  <div className="flex gap-5 lg:gap-10">
                    <a
                      href="https://wa.me/5491134323534"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Enviar WhatsApp"
                    >
                      <img
                        src={wspIcon}
                        alt="whatsapp"
                        className="w-8 lg:w-12"
                      />
                    </a>
                    <a
                      href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%desde%portfolio"
                      title="Enviar email a Virginia"
                      aria-label="Enviar email a Virginia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={emailIcon}
                        alt="email"
                        className="w-8 lg:w-12"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
                  <p className="text-[0.6rem] md:text-sm lg:text-xl">
                    O podés contactar conmigo
                  </p>
                  <div className="flex gap-5 lg:gap-10">
                    <a
                      href="https://www.linkedin.com/in/virginiamontoya/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedInIcon}
                        alt="LinkedIn"
                        className="w-8 lg:w-12"
                      />
                    </a>
                    <a
                      href="https://github.com/mvirm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={githubIcon}
                        alt="Github"
                        className="w-8 lg:w-12"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center -mt-6 lg:-mt-12">
                <div className="relative inline-block">
                  <DotsPattern
                    color={"var(--color-linen)"}
                    className="absolute left-1/2 top-1/2 w-full md:w-110 lg:w-150 h-10 md:h-14 lg:h-20 -translate-x-1/2 -translate-y-1/2"
                  />
                  <a
                    href="https://drive.google.com/uc?export=download&id=1TOQgFwoPx9VbnWL-B3Z-9dkCiu2h-Znz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-4 font-accent-body text-sm md:text-base lg:text-xl px-12 py-6 cursor-pointer text-blue-600"
                  >
                    DESCARGAR MI CV
                    <img src={downloadCV} alt="download" className="w-12" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="relative w-full z-50">
  //     {/* BACKGROUND */}
  //     <picture className="block w-full">
  //       <source media="(min-width: 1024px)" srcSet={bgDesktop} />
  //       <source media="(min-width: 768px)" srcSet={bgTablet} />
  //       <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
  //     </picture>

  //     {/* CONTENT */}
  //     <div className="absolute inset-0 flex flex-col px-6 lg:px-16 pt-18 gap-16">
  //       {/* TITLE */}
  //       <TitleTag
  //         tilte={"CONTACTO"}
  //         dotsColor={"var(--color-cyan)"}
  //         bgColor={"bg-mint"}
  //       />

  //       MAIN ROW
  //       <div className="flex flex-row w-full justify-between items-start">
  //         {/* LEFT TEXT */}
  //         <span className="w-1/3 text-sm lg:text-xl leading-relaxed">
  //           "Programar es mi forma de resolver problemas; diseñar es mi forma de
  //           hacer que esas soluciones sean memorables." <br />
  //           ¿Tenés un proyecto en mente? <br />
  //           Yo te ayudo a construirlo.
  //         </span>
  //         <div className="relative w-2/3 flex flex-col items-center gap-10">
  //           <div className="flex flex-row w-full justify-center gap-24">
  //             <div className="flex flex-col items-center gap-4">
  //               <p className="text-xl">Escribime y charlemos!</p>
  //               <div className="flex flex-row gap-10">
  //                 <a>
  //                   <img src={wspIcon} alt="whatsapp" className="w-12" />
  //                 </a>
  //                 <a
  //                   href="mailto:mvirginiamontoya@gmail.com"
  //                   title="Enviar email"
  //                 >
  //                   <img src={emailIcon} alt="email" className="w-12" />
  //                 </a>
  //               </div>
  //             </div>

  //             {/* RIGHT CONTACT */}
  //             <div className="flex flex-col items-center gap-4">
  //               <p className="text-xl">O podés contactar conmigo</p>
  //               <div className="flex flex-row gap-10">
  //                 <a
  //                   href="https://www.linkedin.com/in/virginiamontoya/"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <img src={linkedInIcon} alt="LinkedIn" className="w-12" />
  //                 </a>
  //                 <a
  //                   href="https://github.com/mvirm"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <img src={githubIcon} alt="Github" className="w-12" />
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="relative w-full flex justify-center">
  //             <DotsPattern
  //               color={"var(--color-linen)"}
  //               className="absolute inset-0 w-2/3 h-full"
  //             />

  //             <button className="relative z-10 py-6 flex items-center gap-3 font-accent-body text-xl">
  //               DESCARGAR MI CV
  //               <img src={downloadCV} alt="download" className="w-12" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="relative w-full overflow-hidden z-50">
  //     {/* BACKGROUND */}
  //     <picture className="block w-full">
  //       <source media="(min-width: 1024px)" srcSet={bgDesktop} />
  //       <source media="(min-width: 768px)" srcSet={bgTablet} />
  //       <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
  //     </picture>
  //     <div className="absolute inset-0 flex flex-col gap-20 my-1 ml-2.5 w-full mt-10">
  //       <TitleTag
  //         tilte={"CONTACTO"}
  //         dotsColor={"var(--color-cyan)"}
  //         bgColor={"bg-mint"}
  //       />
  //       <div className="flex flex-row justify-between">
  //         <span className="w-1/3">
  //           "Programar es mi forma de resolver problemas; diseñar es mi forma de
  //           hacer que esas soluciones sean memorables." ¿Tenés un proyecto en
  //           mente? <br />
  //           Yo te ayudo a construirlo.{" "}
  //         </span>
  //         <div className="w=2/3 flex flex-col ">
  //           <div className="flex flex-row justify-center w-1/2">
  //             <div className="flex flex-col">
  //               <p>Escribime y charlemos!</p>
  //               <div className="flex flex-row justify-between gap-10">
  //                 <a>
  //                   <img src={wspIcon} alt="enviar un whatsapp" />
  //                 </a>
  //                 <a
  //                   href="mailto:mvirginiamontoya@gmail.com?subject=Consulta%desde%portfolio"
  //                   title="Enviar email a Virginia"
  //                   aria-label="Enviar email a Virginia"
  //                 >
  //                   <img src={emailIcon} alt="enviar email" />
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="flex flex-col w-1/2">
  //               <p>O podés contactar conmigo</p>
  //               <div className="flex flex-row justify-between gap-10">
  //                 <a
  //                   href="https://www.linkedin.com/in/virginiamontoya/"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <img src={linkedInIcon} alt="LinkedIn" className="w-6" />
  //                 </a>
  //                 <a
  //                   href="https://github.com/mvirm"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <img src={githubIcon} alt="Github" className="w-6" />
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //           <DotsPattern
  //             color={"var(--color-linen)"}
  //             className={"absolute inset-0 w-2/3"}
  //           />
  //           <button>
  //             descargar CV <img src={downloadCV} alt="download" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default FooterContact;
