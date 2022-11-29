import { Fragment } from "react";
import profilePicture from "../../../media/profilePicture.png";

import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <Fragment>
      <div className={classes.intro}>
        <div className={classes.imagenPerfil}>
          <div className={classes.cajaImagenPerfil}>
            <img src={profilePicture} alt=""></img>
          </div>
        </div>
        <div className={classes.textoPresentacion}>
          <h1>HEY, I´M SUKA</h1>
          <p>This is my portafolio!</p>
          <div className={classes.cta}>
            <a href="mailto:mateodefalco1@gmail.com" target="_blank" rel="noreferrer">
              <button >CONTACT ME</button>
            </a>
            <a href="http://sukadf.eth.limo/" target="_blank" rel="noreferrer">
              <button>SOCIAL LINKS</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
