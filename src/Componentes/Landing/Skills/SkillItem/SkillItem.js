import { Fragment } from "react";
import logo from "../../../../logo.svg";
import estrella from "../../../../media/estrella.png"

import classes from "./SkillItem.module.css";


const SkillItem = (props) => {
  return (
    <Fragment>
      <li className={classes.skillItem}>
        <img src={logo} alt=""></img>
        <div className={classes.estrellas}>
          <img src={estrella} alt=""></img>
        </div>
      </li>
    </Fragment>
  );
};

export default SkillItem;
