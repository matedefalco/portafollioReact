import { Fragment } from "react";
import logo from "../../../logo.svg";

import Skillitem from "./SkillItem/SkillItem";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { id: "HTML", imagen: logo, estrellas: 4 },
    { id: "CSS", imagen: logo, estrellas: 3 },
    { id: "JAVA SCRIPT", imagen: logo, estrellas: 3 },
    { id: "LARAVEL", imagen: logo, estrellas: 2 },
    { id: "PHP", imagen: logo, estrellas: 2 },
    { id: "GIT HUB", imagen: logo, estrellas: 3 },
    { id: "SQL", imagen: logo, estrellas: 2 },
    { id: "GOOGLE ANALYTICS", imagen: logo, estrellas: 4 },
    { id: "GOOGLE TAG MANAGER", imagen: logo, estrellas: 4 },
    { id: "JIRA", imagen: logo, estrellas: 4 },
    { id: "SOLIDITY", imagen: logo, estrellas: 4 },
    { id: "REACT", imagen: logo, estrellas: 3 },
  ];

  const itemSkills = (
    <ul className={classes.skills}>
      {skills.map((item) => (
        <Skillitem></Skillitem>
      ))}
    </ul>
  );

  return (
    <Fragment>
      <div className={classes.caja}>
        <h2 id="skills">Skills</h2>
        {itemSkills}
      </div>
    </Fragment>
  );
};

export default Skills;
