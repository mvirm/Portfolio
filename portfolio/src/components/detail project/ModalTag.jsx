import DotsPattern from "../utils/svg/DotsPattern.jsx";

const ModalTag = ({ tilte, dotsColor, bgColor }) => {
  return (
    <div className="relative w-28 h-10 md:w-40 md:h-14 lg:w-44 lg:h-18">
      <DotsPattern
        color={dotsColor}
        className={"absolute inset-0 z-10  top-1 md:top-2"}
      />
      <div className="flex items-center h-8 md:h-14 lg:h-20">
        <div
          className={`${bgColor} absolute inset-0  z-0 w-24 h-8 md:w-36 md:h-12 lg:w-40 lg:h-16 `}
          style={{ borderColor: "var(--color-ink)" }}
        ></div>
        <h1 className="relative z-20 font-subtitle font-bold text-cream text-xs md:text-base lg:text-xl px-1 lg:px-2">
          {tilte}
        </h1>
      </div>
    </div>
  );
};
export default ModalTag;
