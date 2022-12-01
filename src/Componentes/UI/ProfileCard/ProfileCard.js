import { Fragment } from "react";
import classes from "./ProfileCard.module.css";
import fotoCard from "../../../media/profilePicture.png";

const ProfileCard = (props) => {
  return <Fragment>
    <div className={classes.card}>
        <div className={classes.imagenCard}>
            <img src={fotoCard} alt=""></img>
        </div>
        <div className={classes.titulo}>
            <h1>Titulo</h1>
        </div>
        <div className={classes.descripcion}>
            <p>Desde 2019 trabajo en el desarrollo web. Me recibí en Digital
              House como Programador Web Full Stack. Luego de eso, comencé a
              instruirme en distintos frameworks. Más que nada maquetado de
              Front End.</p>
        </div>
    </div>
  </Fragment>;
};

export default ProfileCard;
