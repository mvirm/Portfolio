import linkWeb from "../../assets/contact_icons/linkWeb_grey.svg";
import githubIcon from "../../assets/contact_icons/github_grey.svg";

const LinkToProject = ({ url, github, widthIcon }) => {
  return (
    <div className="z-50 flex gap-2 md:gap-4 lg:gap-6 mt-auto">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={linkWeb}
          alt="Link Web"
          className=" w-6 md:w-8 lg:w-11 h-auto"
        />
      </a>
      {github === "proyecto privado" ? (
        <div className="relative group">
          <img
            src={githubIcon}
            alt="GitHub"
            className=" w-6 md:w-8 lg:w-11 h-auto"
          />
          <span className="absolute top-full mt-1 hidden group-hover:block text-xs text-purple bg-cream px-2 py-1 rounded whitespace-nowrap z-50">
            Proyecto Privado
          </span>
        </div>
      ) : (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            src={githubIcon}
            alt="GitHub"
            className=" w-6 md:w-8 lg:w-11 h-auto"
          />
        </a>
      )}
    </div>
  );
};

export default LinkToProject;
