import React from "react";
import DotsPattern from "../utils/svg/DotsPattern";

const TitleTag = ({ tilte, dotsColor, bgColor }) => {
  return (
    <div className="relative w-30 h-16 md:w-64 md:h-24 lg:w-96 lg:h-40">
      <DotsPattern
        color={dotsColor}
        className={"absolute inset-0 z-10  top-1 md:top-2"}
      />
      <div className="flex items-center h-14 md:h-20 lg:h-32">
        <div
          className={`${bgColor} absolute inset-0  z-0 w-26 h-14 md:w-56 md:h-20 lg:w-80 lg:h-32 border-t-4 md:border-t-8 lg:border-t-10 `}
          style={{ borderColor: "var(--color-ink)" }}
        ></div>
        <h1 className="relative z-20 font-subtitle font-bold text-cream text-xs md:text-2xl lg:text-4xl px-2">
          {tilte}
        </h1>
      </div>
    </div>
  );
};
export default TitleTag;
