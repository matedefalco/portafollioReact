import { Fragment } from "react";
import classes from "./ProfileCard.css";
import fotoCard from "../../../media/profilePicture.png";

const ProfileCard = () => {
  return <Fragment>
    <div className={classes.Card}>
        <div className={classes.FotoPerfil}>
            <div className={classes.CajaImagen}>
                <img src={fotoCard} alt=""></img>
            </div>
        </div>
        <div className={classes.Titulo}>
            <h1>asd</h1>
        </div>
        <div className={classes.CTA}>
            <div className={classes.tituloLogo}>
                <img src={fotoCard} alt=""></img>    
            </div>    
            <div className={classes.tituloNombre}>
                <p>BLA BLA BLA BLA BLA BLA</p>    
            </div>    
        </div>
        <div className={classes.Descripcion}>LoremIpsum asdjasdjasdjsadj</div>
    </div>
  </Fragment>;
};

export default ProfileCard;
