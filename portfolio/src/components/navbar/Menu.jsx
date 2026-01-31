const Menu = ({ scrollToSection, setShowMenu }) => {
  const scrollHandler = (id) => {
    scrollToSection(id);
    setShowMenu(false);
  };

  return (
    <div className="bg-linen/40 border-b-4 border-ink text-xs w-28 pl-4 pr-2 py-2">
      <h4 className="py-1 cursor-pointer" onClick={() => scrollHandler("home")}>
        inicio
      </h4>
      <h4
        className="py-1 cursor-pointer"
        onClick={() => scrollHandler("profile")}
      >
        perfil
      </h4>
      <h4
        className="py-1 cursor-pointer"
        onClick={() => scrollHandler("stack")}
      >
        stack
      </h4>
      <h4
        className="py-1 cursor-pointer"
        onClick={() => scrollHandler("projects")}
      >
        proyectos
      </h4>
      <h4
        className="py-1 cursor-pointer"
        onClick={() => scrollHandler("contact")}
      >
        contacto
      </h4>
    </div>
  );
};

export default Menu;
