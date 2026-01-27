import React from "react";
const CardHome = ({ title, subtitle, list }) => {
  return (
    <div className="group p-4 w-1/3 top-10 lg:top-28 relative pointer-events-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-title font-extrabold text-stone group-hover:text-ink text-base md:text-4xl lg:text-5xl">
          {title.toUpperCase()}
        </h1>

        <h2 className="font-accent-title text-stone text-xs md:text-base">
          {subtitle}
        </h2>
      </div>

      <ul className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300  mt-1 lg:mt-2 text-xs lg:text-base">
        {list && list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};
export default CardHome;
