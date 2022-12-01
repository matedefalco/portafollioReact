import { Fragment } from "react";
import Button from "../../UI/Button/Button";
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
          <h3>This is my portfolio!</h3>
          <div className={classes.cta}>
          <a href="mailto:mateodefalco1@gmail.com" target="_blank" rel="noreferrer">
            <Button title="CONTACT ME" />
          </a>
          <a href="https://sukadf.eth.limo" target="_blank" rel="noreferrer">
            <Button title="SOCIAL LINKS" />
          </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;