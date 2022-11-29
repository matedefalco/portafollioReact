import { Fragment } from "react";
import logo from "../../../logo.svg";

import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <Fragment>
      <div className={classes.intro}>
        <div className={classes.imagenPerfil}>
          <img src={logo} alt=""></img>
        </div>
        <div className={classes.textoPresentacion}>
          <h1>HEY, I´M SUKA</h1>
          <p>This is my portafolio!</p>
          <div className={classes.cta}>
            <button>CONTACT ME</button>
            <button>SOCIAL LINKS</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
