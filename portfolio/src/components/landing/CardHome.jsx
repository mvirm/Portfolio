const CardHome = ({ title, subtitle, list, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative transition-all duration-700 ease-in-out cursor-pointer pointer-events-auto
        ${isOpen ? "w-4/5 top-0 md:top-10" : "w-1/3 top-10"} 
        cursor-pointer lg:cursor-default
        group p-2 md:p-4`}
    >
      <div
        className={`flex flex-col transition-all duration-500 ${
          isOpen ? "items-start text-left" : "items-center text-center"
        }`}
      >
        <h1
          className={`font-title font-extrabold ${isOpen ? "text-ink" : "text-stone"} text-base md:text-4xl lg:text-5xl leading-tight hover:text-ink`}
        >
          {title.toUpperCase()}
        </h1>
        <h2
          className={`font-accent-title text-stone ${isOpen ? "text-xs" : "text-[0.5rem]"} md:text-base`}
        >
          {subtitle}
        </h2>
      </div>

      <ul
        className={`mt-4 w-full transition-all duration-500
          ${
            isOpen
              ? "block opacity-100"
              : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
          }`}
      >
        {list &&
          list.map((item, index) => (
            <li
              key={index}
              className={`mb-1 md:mb-2 leading-tight text-left transition-all duration-500
                ${
                  isOpen
                    ? "text-[0.7rem] md:text-sm lg:text-lg" // Tamaño normal cuando está abierta
                    : "text-[0.5rem] md:text-xs lg:text-lg" // Tamaño más chico para el hover
                }`}
            >
              • {item}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default CardHome;
