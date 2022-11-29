import { Fragment } from "react";
import classes from "./ProfileCard.css";
import fotoCard from "../../../media/profilePicture.png";

const ProfileCard = (props) => {
  return <Fragment>
    <div className={classes.card}>
        <div className={classes.imagenCard}>
            <img src={fotoCard} alt=""></img>
        </div>
        <div className={classes.titulo}>
            <h1>{props.title}</h1>
        </div>
        <div className={classes.CTA}>
            <div className={classes.tituloLogo}>
                <img src={fotoCard} alt=""></img>    
            </div>    
            <div className={classes.tituloNombre}>
                <h3>Titulo</h3>    
            </div>    
        </div>
        <div className={classes.descripcion}>LoremIpsum asdjasdjasdjsadj</div>
    </div>
  </Fragment>;
};

export default ProfileCard;
