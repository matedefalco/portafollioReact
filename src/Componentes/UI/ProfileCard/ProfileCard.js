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
            <h1>{props.titulo}</h1>
        </div>
        <div className={classes.descripcion}>
            <p>{props.text}</p>
        </div>
    </div>
  </Fragment>;
};

export default ProfileCard;
