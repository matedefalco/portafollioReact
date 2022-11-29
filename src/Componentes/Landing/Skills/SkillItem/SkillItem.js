import { Fragment } from "react";
import logo from "../../../../logo.svg";

import classes from "./SkillItem.module.css";


const SkillItem = (props) => {
  const estrellas = 7;

  for (let index = 0; index < estrellas ; index++) {
    <img src={logo} alt=""/>
  }

  return (
    <Fragment>
      <li className={classes.skillItem}>
        <img src={logo} alt=""></img>
        <div className={classes.estrellas}>
          <img src={logo} alt=""></img>
          <img src={logo} alt=""></img>
          <img src={logo} alt=""></img>
        </div>
      </li>
    </Fragment>
  );
};

export default SkillItem;
