import { Fragment } from "react";
import logo from "../../../logo.svg";

import Skillitem from "./SkillItem/SkillItem";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { id: "c1", imagen: logo, estrellas: 2 },
    { id: "c3", imagen: logo, estrellas: 3 },
    { id: "c4", imagen: logo, estrellas: 2 },
    { id: "c5", imagen: logo, estrellas: 4 },
    { id: "c6", imagen: logo, estrellas: 5 },
    { id: "c7", imagen: logo, estrellas: 1 },
    { id: "c8", imagen: logo, estrellas: 3 },
    { id: "c9", imagen: logo, estrellas: 2 },
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
