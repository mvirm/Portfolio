import React from "react";
import TitleTag from "../utils/TitleTag";
import axios from "axios";
import { useEffect, useState } from "react";

const TechSkills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/Json/technology_stack.json")
      .then((response) => {
        const filtered = response.data.technologyStack.filter(
          (tech) => tech.usedByMe === true,
        );
        console.log(filtered);

        setData(filtered);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="-top-14 md:-top-36 lg:-top-64 relative">
      <TitleTag
        tilte={"STACK TECNOLÓGICO"}
        dotsColor={"var(--color-orange)"}
        bgColor={"bg-magenta"}
      />
      {!data.length ? (
        <p>loading</p>
      ) : (
        <div className="overflow-hidden m-4 md:m-8 lg:m-20 px-4">
          <div className="flex w-max animate-carousel gap-4 lg:gap-6">
            {[...data, ...data].map((tech, index) => (
              <img
                key={index}
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-28 lg:h-28 shrink-0"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechSkills;
