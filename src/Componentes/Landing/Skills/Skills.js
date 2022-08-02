import { Fragment } from "react";
import logo from "../../../logo.svg";

import Skillitem from "./SkillItem/SkillItem";
import classes from "./Skills.module.css";

const Skills = () => {
    const skills = [];

  return (
    <Fragment>
        <ul className={classes.skills}>
        <h2 id='skills'>Skills</h2>
           <Skillitem />
        </ul>
    </Fragment>
  );
};

export default Skills;
