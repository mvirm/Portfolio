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
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("data " + data);

  return (
    <div>
      <TitleTag
        tilte={"STACK TECNOLÓGICO"}
        dotsColor={"var(--color-orange)"}
        bgColor={"bg-magenta"}
      />
    </div>
  );
};

export default TechSkills;
